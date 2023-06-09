import { Component } from "react";
import ShoppingForm from "./ShoppingForm/ShoppingForm";
import ShoppingList from "./ShoppingList/ShoppingList";
import initialPurchases from "../../data/shopping-list.json";
import styles from "./shopping-plan.module.css";
import { nanoid } from "nanoid";

class ShoppingPlan extends Component {
  state = {
    purchases: initialPurchases,
    filter: "",
  };

  addPurchase = (data) => {
    this.setState((prevState) => {
      const newPurchase = {
        id: nanoid(),
        ...data,
        completed: false,
      };
      return { purchases: [...prevState.purchases, newPurchase] };
    });
  };

  deletePurchase = (id) => {
    this.setState((prevState) => ({
      purchases: prevState.purchases.filter((purchase) => purchase.id !== id),
    }));
  };

  toggleCompleted = (id) => {
    this.setState((prevState) => ({
      purchases: prevState.purchases.map((purchase) =>
        purchase.id === id
          ? { ...purchase, completed: !purchase.completed }
          : purchase
      ),
    }));
  };

  calculateCompletedPurchases = () => {
    const { purchases } = this.state;
    return purchases.reduce(
      (total, purchase) => (purchase.completed ? total + 1 : total),
      0
    );
  };

  render() {
    const { addPurchase } = this;
    const { purchases } = this.state;
    const totalCount = purchases.length;
    const completedPurchaseCount = this.calculateCompletedPurchases();
    return (
      <div className={styles.container}>
        <div>
          <h2 className={styles.title}>Інформація про покупку</h2>
          <ShoppingForm onSubmit={addPurchase} />
        </div>
        <div>
          <p className={styles.text}>
            Загальна кількість покупок: {totalCount}
          </p>
          <p className={styles.text}>
            Зроблено покупок: {completedPurchaseCount}
          </p>
          <p className={styles.text}>
            Залишилося купити: {totalCount - completedPurchaseCount}
          </p>
          <ShoppingList
            purchases={purchases}
            onDeletePurchase={this.deletePurchase}
            onToggleCompleted={this.toggleCompleted}
          />
        </div>
      </div>
    );
  }
}

export default ShoppingPlan;
