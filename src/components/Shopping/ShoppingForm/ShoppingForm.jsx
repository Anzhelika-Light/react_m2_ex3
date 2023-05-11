import { Component } from "react";
import { nanoid } from "nanoid";
import styles from "./shopping-form.module.css";

class ShoppingForm extends Component {
  state = {
    name: "",
    quantity: "",
    price: "",
    urgency: false,
    type: "Продукти",
  };

  nameId = nanoid();
  quantityId = nanoid();
  priceId = nanoid();
  urgencyId = nanoid();
  typeId = nanoid();

  handleChange = ({ target }) => {
    const { name, value, checked, type } = target;
    const newValue = type === "checkbox" ? checked : value;
    this.setState({
      [name]: newValue,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { price, quantity } = this.state;
    if (price <= 0 || quantity <= 0) {
      alert("Кількість та ціна мають бути більше нуля");
    } else {
      const { onSubmit } = this.props;
      onSubmit({ ...this.state });
      this.reset();
    }

    console.log(this.state);
  };

  reset() {
    this.setState({
      name: "",
      quantity: "",
      price: "",
      urgency: false,
      type: "Продукти",
    });
  }

  render() {
    const {
      handleChange,
      handleSubmit,
      nameId,
      quantityId,
      priceId,
      urgencyId,
      typeId,
    } = this;
    const { name, quantity, price, urgency, type } = this.state;
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
            value={name}
            id={nameId}
            className={styles.field}
            required
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
            value={quantity}
            min="0"
            // step="0.1"
            id={quantityId}
            className={styles.field}
            required
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
            value={price}
            min="0"
            // step="0.1"
            id={priceId}
            className={styles.field}
            required
          />
        </div>
        <div className={`${styles.formGroup} ${styles.checkboxGroup}`}>
          <input
            onChange={handleChange}
            type="checkbox"
            name="urgency"
            checked={urgency}
            id={urgencyId}
          />
          <label htmlFor={urgencyId} className={styles.label}>
            Термінова покупка
          </label>
        </div>
        <div className={`${styles.formGroup} ${styles.checkboxGroup}`}>
          <label htmlFor={typeId} className={styles.label}>
            Тип покупки
          </label>
          <select
            onChange={handleChange}
            name="type"
            value={type}
            id={typeId}
            className={styles.field}
            required
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
