import { Component } from "react";

import CharactersListItem from "./CharacterListItem";

import Characters from "../../data/characters.json";

import styles from "./characters-list.module.css";

class CharactersList extends Component {
  render() {
    return (
      <table className={styles.table}>
        <caption className={styles.tableTitle}>
          Characters of 'The Boys'
        </caption>
        <thead>
          <tr className={styles.tableRow}>
            <th className={styles.tableHeader}>Actor</th>
            <th className={styles.tableHeader}>Character</th>
          </tr>
        </thead>
        <tbody>
          <CharactersListItem items={Characters} />
        </tbody>
      </table>
    );
  }
}

export default CharactersList;
