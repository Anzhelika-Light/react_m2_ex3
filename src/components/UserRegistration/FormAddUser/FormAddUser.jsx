import { Component } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";

import styles from "./form-add-user.module.css";

class FormAddUser extends Component {
  static defaultProps = {
    onSubmit: () => {},
  };

  static propTypes = {
    onSubmit: PropTypes.func,
  };

  state = {
    email: "",
    name: "",
    password: "",
  };

  emailId = nanoid();
  nameId = nanoid();
  passwordId = nanoid();

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit({ ...this.state });
    this.reset();
  };

  reset() {
    this.setState({
      email: "",
      name: "",
      password: "",
    });
  }

  render() {
    const { email, name, password } = this.state;

    const { handleChange, handleSubmit, emailId, nameId, passwordId } = this;

    return (
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor={emailId} className={styles.label}>
            E-mail
          </label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            value={email}
            id={emailId}
            className={styles.field}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor={nameId} className={styles.label}>
            Name
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            value={name}
            id={nameId}
            className={styles.field}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor={passwordId} className={styles.label}>
            Password
          </label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            value={password}
            id={passwordId}
            className={styles.field}
          />
        </div>
        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </form>
    );
  }
}

export default FormAddUser;
