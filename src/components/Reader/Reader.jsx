import { Component } from "react";
import styles from "./reader.module.css";
import Progress from "./Progress";

class Reader extends Component {
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
        {/* <ul className={styles.tabs__caption}>{elements}</ul> */}
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
