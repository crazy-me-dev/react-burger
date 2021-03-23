import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Layout = props => {
  return (
    <Auxiliary>
      <Toolbar />
      <SideDrawer />
      <div>Backdrop</div>
      <main className={classes.LayoutContent}>{props.children}</main>
    </Auxiliary>
  );
};

export default Layout;
