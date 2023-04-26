import PropTypes from "prop-types";

import { FaTrashAlt } from "react-icons/fa";
import styles from "./user-info.module.css";

const UserInfo = ({ items, removeUser }) => {
  const elements = items.map(({ id, email, name, password }) => (
    <li key={id} className={styles.item}>
      <div className={styles.wrapper}>
        <div>
          <p className={styles.text}>
            <span className={styles.label}>Email:</span> {email}
          </p>
          <p className={styles.text}>
            <span className={styles.label}>Name:</span> {name}
          </p>
          <p className={styles.text}>
            <span className={styles.label}>Password:</span> {password}
          </p>
        </div>
        <FaTrashAlt
          className={styles.icon}
          onClick={() => {
            removeUser(id);
          }}
        />
      </div>
    </li>
  ));

  return (
    <div>
      <h2 className={styles.title}>User Data</h2>
      <ol className={styles.list}>{elements}</ol>
    </div>
  );
};

UserInfo.defaultProps = {
  items: [],
};

UserInfo.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
    })
  ),
};

export default UserInfo;
