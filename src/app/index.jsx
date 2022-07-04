import React from "react";
import { render } from "react-dom";

import "./../scss/main.scss";

import User from "./components/User.jsx";
import UserList from "./components/UserList.jsx";

class App extends React.Component {
  render() {
    return (
      <div className="home">
        <User />
        <UserList />
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
