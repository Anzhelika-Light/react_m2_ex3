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

  addUser = (data) => {
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

  removeUser = (id) => {
    this.setState(({ users }) => {
      const newUsers = users.filter((user) => user.id !== id);
      return { users: newUsers };
    });
  };

  render() {
    const { addUser, removeUser } = this;
    const users = [...this.state.users];

    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Registration form</h1>
        <div className={styles.wrapper}>
          <FormAddUser onSubmit={addUser} />
          <UserInfo items={users} removeUser={removeUser} />
        </div>
      </div>
    );
  }
}

export default UserRegistration;
