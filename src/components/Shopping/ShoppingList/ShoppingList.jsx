// import ShoppingListItem from "./ShoppingListItem";
import styles from "./shopping-list.module.css";
// import purchases from "../../../data/shopping-list.json";
import { FaTrashAlt } from "react-icons/fa";

const ShoppingList = ({ purchases, onDeletePurchase, onToggleCompleted }) => {
  const elements = purchases.map(
    ({ id, name, quantity, price, urgency, type, completed }) => {
      const subtotal = quantity * price;
      const classNames = completed ? styles.completed : "";
      return (
        <tr key={id} className={classNames}>
          <td>
            <input
              type="checkbox"
              name=""
              id=""
              checked={completed}
              onChange={() => onToggleCompleted(id)}
            />
          </td>
          <td>{name}</td>
          <td>{quantity}</td>
          <td>{price}</td>
          <td>{subtotal}</td>
          <td>{`${urgency}` === "true" ? "yes" : ""}</td>
          <td>{type}</td>
          <td>
            <FaTrashAlt
              className={styles.icon}
              onClick={() => onDeletePurchase(id)}
            />
          </td>
        </tr>
      );
    }
  );

  return (
    <table>
      <caption></caption>
      <thead>
        <tr>
          <th>Придбано</th>
          <th>Назва</th>
          <th>Кількість</th>
          <th>Ціна, грн</th>
          <th>Всього, грн</th>
          <th>Терміново</th>
          <th>Тип покупки</th>
          <th></th>
        </tr>
      </thead>
      {/* <ShoppingListItem
        items={purchases}
        onToggleCompleted={onToggleCompleted}
      /> */}
      <tbody className={styles.list}>{elements}</tbody>
    </table>
  );
};

export default ShoppingList;
