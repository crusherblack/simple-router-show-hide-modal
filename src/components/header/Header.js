import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = ({ setModalVisible }) => {
  return (
    <div className="header">
      <div className="content-left">
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Link to="/transcation">
          <h1>Transkasi</h1>
        </Link>
        <Link to="/list-tour">
          <h1>List Tour</h1>
        </Link>
      </div>
      <div className="content-right">
        <h1 onClick={() => setModalVisible(true)}>Login</h1>
        <h1>Register</h1>
      </div>
    </div>
  );
};

export default Header;
