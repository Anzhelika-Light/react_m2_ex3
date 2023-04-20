import { Component } from "react";
import nanoid from "nanoid";
import PropTypes from "prop-types";
import styles from "./good-list.module.css";

class GoodsList extends Component {
  static defaultProps = {
    items: [],
  };

  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.string.isRequired),
  };

  state = {
    activeIndex: 0,
  };

  setActiveIndex = (index) => {
    this.setState({ activeIndex: index });
  };

  makeClassNames = (index) => {
    const { activeIndex } = this.state;
    const classNames =
      activeIndex === index ? `${styles.item} ${styles.active}` : styles.item;
    return classNames;
  };

  render() {
    const { items } = this.props;
    const { setActiveIndex } = this;

    const elements = items.map((item, index) => {
      const classNames = this.makeClassNames(index);
      return (
        <li className={classNames} onClick={() => setActiveIndex(index)}>
          {item}
        </li>
      );
    });

    return (
      <>
        <h2>Лавка желаний</h2>
        <ul className={styles.list}>{elements}</ul>
      </>
    );
  }
}

export default GoodsList;
