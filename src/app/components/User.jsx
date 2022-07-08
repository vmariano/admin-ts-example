import React, { Component } from "react";
import { fetchUsers } from "../data/userHelpers";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: ""
      }
    };
    this.fetchUsers = this.fetchUsers.bind(this);
  }

  fetchUsers() {
      fetchUsers().then(json => {
        this.setState({
          user: json
        });
      });
  }

  componentWillMount() {
    this.fetchUsers();
  }

  render() {
    return (
      <div className="user">
        <h1>Hello {this.state.user.name}</h1>
      </div>
    );
  }
}

export default User;
