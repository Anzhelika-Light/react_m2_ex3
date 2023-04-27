import { Component } from "react";
import { nanoid } from "nanoid";

import FormAddUser from "./FormAddUser/FormAddUser";
import UserInfo from "./UserInfo/UserInfo";

import styles from "./user-regiatration.module.css";

class UserRegistration extends Component {
  state = {
    users: [],
    filter: "",
  };

  filterId = nanoid();

  componentDidMount() {
    const users = JSON.parse(localStorage.getItem("users"));
    if (users?.length) {
      this.setState({
        users,
      });
    }
  }

  componentDidUpdate(_, prevState) {
    const { users } = this.state;
    if (prevState.users.length !== users.length) {
      localStorage.setItem("users", JSON.stringify(users));
    }
  }

  addUser = (data) => {
    if (this.alreadyExists(data)) {
      return alert("This user already exist");
    }

    this.setState((prevState) => {
      const newUser = {
        id: nanoid(),
        ...data,
      };

      return {
        users: [...prevState.users, newUser],
      };
    });
  };

  alreadyExists({ name, email }) {
    const { users } = this.state;
    const result = users.find(
      (user) => user.name === name || user.email === email
    );
    return result;
  }

  removeUser = (id) => {
    this.setState(({ users }) => {
      const newUsers = users.filter((user) => user.id !== id);
      return { users: newUsers };
    });
  };

  handleFilter = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  getFilteredUsers() {
    const { users, filter } = this.state;

    if (!filter) {
      return users;
    }

    const normalizedFilter = filter.toLowerCase();
    const filteredUsers = users.filter(({ email, name }) => {
      const normalizedEmail = email.toLowerCase();
      const normalizedName = name.toLowerCase();
      const result =
        normalizedEmail.includes(normalizedFilter) ||
        normalizedName.includes(normalizedFilter);
      return result;
    });

    return filteredUsers;
  }

  render() {
    const { addUser, removeUser, filterId, handleFilter } = this;
    // const users = [...this.state.users];
    const users = this.getFilteredUsers();

    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Registration form</h1>
        <div className={styles.wrapper}>
          <FormAddUser onSubmit={addUser} />
          <div>
            <label className={styles.label} htmlFor={filterId}>
              Search a user
            </label>
            <input
              className={styles.field}
              type="text"
              name="filter"
              id={filterId}
              onChange={handleFilter}
            />
            <UserInfo items={users} removeUser={removeUser} />
          </div>
        </div>
      </div>
    );
  }
}

export default UserRegistration;
