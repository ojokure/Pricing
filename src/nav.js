import React from "react";
import { NavContainer } from "./navStyles";

const Nav = () => (
  <NavContainer className="navigation">
    <div className="logo">
      <p className="logo-name">Appruve</p>
    </div>
    <div className="list-items-container">
      <ul className="list-items">
        <li className="list-item">
          <a href="#">FAQ</a>
        </li>
        <li className="list-item">
          <a href="#">About</a>
        </li>
        <li className="list-item">
          <a href="#">Sign Up</a>
        </li>
        <li className="list-item">
          <a href="#">Log in</a>
        </li>
      </ul>
    </div>
  </NavContainer>
);

export default Nav;
