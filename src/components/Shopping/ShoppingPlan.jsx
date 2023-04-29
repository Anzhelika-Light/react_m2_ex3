import { Component } from "react";
import ShoppingList from "./ShoppingList/ShoppingList";
import initialPurchases from "../../data/shopping-list.json";
import styles from "./shopping-plan.module.css";

class ShoppingPlan extends Component {
  state = {
    purchases: initialPurchases,
    filter: "",
  };

  deletePurchase = (id) => {
    this.setState((prevState) => ({
      purchases: prevState.purchases.filter((purchase) => purchase.id !== id),
    }));
  };

  toggleCompleted = (id) => {
    this.setState(({ purchases }) =>
      purchases.map((purchase) =>
        purchase.id === id
          ? { ...purchase, completed: !purchase.completed }
          : purchase
      )
    );
  };

  render() {
    const { purchases } = this.state;
    const totalCount = purchases.length;
    return (
      <div>
        <p>Загальна кількість покупок: {totalCount}</p>
        <p>Зроблено покупок: </p>
        <p>Залишилося пунктів:</p>
        <ShoppingList
          purchases={purchases}
          onDeletePurchase={this.deletePurchase}
          onToggleCompleted={this.toggleCompleted}
        />
      </div>
    );
  }
}

export default ShoppingPlan;
