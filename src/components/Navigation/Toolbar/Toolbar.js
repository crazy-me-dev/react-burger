import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../../components/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = props => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <Logo height='80%' />
    <nav className={classes.DesktopOnly}>
    <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;
