import { Component } from "react";
import PropTypes from "prop-types";

import styles from "./characters-list.module.css";

import { TiDelete } from "react-icons/ti";

class CharactersListItem extends Component {
  static defaultProps = {
    items: [],
  };

  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        actor: PropTypes.string.isRequired,
        character: PropTypes.string.isRequired,
      })
    ),
  };

  state = {
    characters: [...this.props.items],
  };

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
