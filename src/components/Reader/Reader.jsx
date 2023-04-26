import { Component } from "react";

import PropTypes from "prop-types";

import Progress from "./Progress";

import styles from "./reader.module.css";

class Reader extends Component {
  static defaultProps = {
    items: [],
  };

  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        caption: PropTypes.string.isRequired,
        text: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      }).isRequired
    ),
  };

  state = {
    activeIndex: 0,
  };

  setActiveIndex = (index) => {
    this.setState({ activeIndex: index });
  };

  render() {
    const { items } = this.props;
    const { activeIndex } = this.state;

    const currentItem = items[activeIndex];
    const textElements = currentItem.text.map((item) => (
      <p className={styles.text}>{item}</p>
    ));

    return (
      <div className={styles.tabs}>
        <Progress
          onClick={this.setActiveIndex}
          activeIndex={this.state.activeIndex}
          {...this.props}
        />
        <div className={styles.tabs__content}>{textElements}</div>
      </div>
    );
  }
}

export default Reader;
