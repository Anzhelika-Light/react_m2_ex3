import { Component } from "react";
import styles from "./reader.module.css";

class Progress extends Component {
  handleClick = (index) => {
    const { onClick } = this.props;
    onClick(index);
  };

  makeLiClassNames = (index) => {
    const { activeIndex } = this.props;
    console.log(activeIndex);
    const classNames =
      activeIndex === index ? `${styles.item} ${styles.active}` : styles.item;
    return classNames;
  };

  render() {
    const { items } = this.props;
    const elements = items.map(({ id, caption }, index) => {
      const classNames = this.makeLiClassNames(index);
      return (
        <li
          className={classNames}
          key={id}
          onClick={() => this.handleClick(index)}
        >
          {caption}
        </li>
      );
    });
    return <ul className={styles.tabs__caption}>{elements}</ul>;
  }
}

export default Progress;
