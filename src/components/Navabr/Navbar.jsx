import React from "react";
import "./navbar.css";

const Navbar = ({ name }) => {
  return (
    <div className="nav">
      <div className="nav-left">
        <h2>Redux</h2>
        <span>{name ? name : "User"}</span>
      </div>

      <div className="nav-right">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Sign in</li>
          <li>Log in</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
