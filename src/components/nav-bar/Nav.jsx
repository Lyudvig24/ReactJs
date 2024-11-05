import React from "react";
import { NavLink } from "react-router-dom";


import './nav.css';

const Nav = () => {
  return (
    <nav className="nav">

      <div className="item">
        <NavLink to='/profile'>Profile</NavLink>
      </div>

      <div className="item">
        <NavLink to='/dialogs'>Messages</NavLink>
      </div>

      <div className="item">
        <NavLink to='/news'>News</NavLink>
      </div>

      <div className="item">
        <NavLink to='/music'>Music</NavLink>
      </div>

      <div className="item item-settings">
        <NavLink to='/settings'>Settings</NavLink>
      </div>

    </nav>
  );
};


export default Nav;