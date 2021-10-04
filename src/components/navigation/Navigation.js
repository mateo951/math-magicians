import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './nav.module.css';

const Navigation = () => (
  <nav>
    <NavLink className={style.listitems} to="/" exact>
      <h1>Math Magicians</h1>
    </NavLink>
    <NavLink to="/" exact>
      <img src="https://img.icons8.com/external-bearicons-flat-bearicons/64/000000/external-magic-wand-graphic-design-bearicons-flat-bearicons.png" alt="logo" />
    </NavLink>
    <ul className={style.navlinks}>
      <NavLink to="/" className={style.listitems} exact>
        Home
      </NavLink>
      <NavLink to="/calculator" className={style.listitems} exact>
        Calculator
      </NavLink>
      <NavLink to="/quotes" className={style.listitems} exact>
        Quotes
      </NavLink>
    </ul>
  </nav>
);

export default Navigation;
