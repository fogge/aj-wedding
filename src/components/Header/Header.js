import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
        <NavLink exact activeClassName="nav_active" to="/">Bröllop</NavLink>
        <img src="logo.png" className="logo" alt="logo" />
        <NavLink activeClassName="nav_active" to="/rvsp">O.S.A</NavLink>
      </div>
      <h1>Vi gifter oss!</h1>
      <p>5 september 2020</p>
    </header>
  );
};

export default Header;
