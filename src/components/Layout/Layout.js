import React, { Fragment } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.module.css';

const Layout = props => {
  return (
    <Auxiliary>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={classes.LayoutContent}>{props.children}</main>
    </Auxiliary>
  );
};

export default Layout;
