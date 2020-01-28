import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
        <Link to="/">Bröllop</Link>
        <img src="logo.png" className="logo" alt="logo" />
        <Link to="/rvsp">Osa</Link>
      </div>
      <h1>Vi gifter oss!</h1>
      <p>Bröllopet hålls den 5 september 2020</p>
    </header>
  );
};

export default Header;
