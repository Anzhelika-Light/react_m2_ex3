import styles from "./shopping-list.module.css";

const ShoppingListItem = ({ items }, onToggleCompleted) => {
  const elements = items.map(
    ({ id, name, quantity, price, urgency, type, completed }) => {
      const subtotal = quantity * price;
      const classNames = completed
        ? `${styles.item} ${styles.completed}`
        : styles.item;
      return (
        <tr key={id} className={classNames}>
          <td>
            <input
              type="checkbox"
              name=""
              id=""
              checked={completed}
              onChange={() => {
                onToggleCompleted(id);
              }}
            />
          </td>
          <td>{name}</td>
          <td>{quantity}</td>
          <td>{price}</td>
          <td>{subtotal}</td>
          <td>{urgency}</td>
          <td>{type}</td>
        </tr>
      );
    }
  );

  return <tbody className={styles.list}>{elements}</tbody>;
};

export default ShoppingListItem;
