import { Component } from "react";
import styles from "./characters-list.module.css";

import { TiDelete } from "react-icons/ti";

class CharactersListItem extends Component {
  state = {
    characters: [...this.props.items],
    index: 0,
  };

  // removeBook = (id) => {
  //   this.setState(({ books }) => {
  //     const newBooks = books.filter((item) => item.id !== id);

  //     return {
  //       books: newBooks,
  //     };
  //   });
  // };

  removeCharacter = (id) => {
    this.setState(({ characters }) => {
      const newCharacters = characters.filter((item) => item.id !== id);

      return {
        characters: newCharacters,
      };
    });
  };

  render() {
    const { characters } = this.state;

    const { removeCharacter } = this;

    const elements = characters.map(({ id, actor, character }) => (
      <tr className={styles.tableRow} key={id}>
        <td>{actor}</td>
        <td>{character}</td>
        <td>
          <TiDelete
            onClick={() => {
              removeCharacter(id);
            }}
            className={styles.icon}
          />
        </td>
      </tr>
    ));
    return <>{elements}</>;
  }
}

export default CharactersListItem;
