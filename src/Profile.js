import React from "react";
import { Link } from "react-router-dom";

export default class Profile extends React.Component {
  render() {
    return (
      <div>
        <h1>This is my profile</h1>
        <Link to="/">Go back to home</Link>
        <div>
          <img src="https://www.bestsadstatus.com/wp-content/uploads/2019/09/whatsapp-dp-for-girls-17.jpg"></img> 
        </div>
      </div>
    );
  }
}


