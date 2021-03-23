import classes from './Logo.module.css';
import React from 'react';
import logoImg from '../../assets/images/burger-logo.png';

const Logo = props => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={logoImg} alt='My Burger Builder' />
  </div>
);

export default Logo;
