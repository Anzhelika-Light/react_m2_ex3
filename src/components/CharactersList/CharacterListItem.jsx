import { Component } from "react";
import styles from "./characters-list.module.css";

import { TiDelete } from "react-icons/ti";

class CharactersListItem extends Component {
  state = {
    characters: [...this.props.items],
    index: 0,
  };

  //   addCharacters = ({ items }) => {
  //     this.setState({
  //       characters: [...items],
  //     });
  //   };

  removeCharacter = (id) => {
    const { items } = this.state;

    const finalItems = items.filter((item) => item.id !== id);
    return finalItems;
  };

  render() {
    const { items } = this.props;

    const elements = items.map(({ id, actor, character }) => (
      <tr className={styles.tableRow} key={id}>
        <td>{actor}</td>
        <td>{character}</td>
        <td>
          <TiDelete onClick={this.removeCharacter} className={styles.icon} />
        </td>
      </tr>
    ));
    return <>{elements}</>;
  }
}

export default CharactersListItem;
