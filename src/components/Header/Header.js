import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div>
        <a href="#">Bröllop</a>
        <img src="logo.png" class="logo" alt="logo" />
        <a href="#">Osa</a>
      </div>
      <h1>
        Vi är förlovade!
      </h1>
      <p>
        Bröllopet hålls den 5 September 2019 
      </p>
    </header>
  );
};

export default Header;
