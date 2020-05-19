import React from "react";
import { Link } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Home page</h1>
        <Link to="/profile">Go back to profile</Link>
        <div>
          <img src="https://www.bestsadstatus.com/wp-content/uploads/2019/09/whatsapp-dp-for-girls-6.jpg"></img>
        </div>
      </div>
    );
  }
}
