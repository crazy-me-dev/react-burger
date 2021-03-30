import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.module.css';

const NavigationItem = props => (
  <li className={classes.NavigationItem}>
    {/* activeClassName sets the css module class */}
    <NavLink
      to={props.link}
      activeClassName={classes.active}
      exact={props.exact}
    >
      {props.children}
    </NavLink>
  </li>
);

export default NavigationItem;
