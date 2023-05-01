import { Component } from "react";
import { nanoid } from "nanoid";
import styles from "./shopping-form.module.css";

class ShoppingForm extends Component {
  state = {
    name: "",
    quantity: 0,
    price: 0,
    checkbox: false,
    select: "Продукти",
  };

  nameId = nanoid();
  quantityId = nanoid();
  priceId = nanoid();

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
      //   checkbox: !this.state.checkbox,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit(...this.state);
    this.reset();
  };

  reset() {
    this.setState({
      name: "",
      quantity: 0,
      price: 0,
      checkbox: false,
      select: "Продукти",
    });
  }

  render() {
    const { handleChange, handleSubmit, nameId, quantityId, priceId } = this;

    return (
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor={nameId} className={styles.label}>
            Назва
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            id={nameId}
            className={styles.field}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor={quantityId} className={styles.label}>
            Кількість
          </label>
          <input
            onChange={handleChange}
            type="number"
            name="quantity"
            id={quantityId}
            className={styles.field}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor={priceId} className={styles.label}>
            Ціна
          </label>
          <input
            onChange={handleChange}
            type="number"
            name="price"
            id={priceId}
            className={styles.field}
          />
        </div>
        <div className={`${styles.formGroup} ${styles.checkboxGroup}`}>
          <input
            onChange={handleChange}
            type="checkbox"
            name="checkbox"
            id=""
          />
          <label htmlFor="" className={styles.label}>
            Термінова покупка
          </label>
        </div>
        <div className={`${styles.formGroup} ${styles.checkboxGroup}`}>
          <label htmlFor="" className={styles.label}>
            Тип покупки
          </label>
          <select
            onChange={handleChange}
            name="select"
            id=""
            className={styles.field}
          >
            <option value="Продукти">Продукти</option>
            <option value="Посуд">Посуд</option>
            <option value="Побутова хімія">Побутова хімія</option>
            <option value="Інше">Інше</option>
          </select>
        </div>
        <button type="submit" className={styles.btn}>
          Add
        </button>
      </form>
    );
  }
}

export default ShoppingForm;
