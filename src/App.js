import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Orders from './containers/Orders/Orders';
import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Auth from './containers/Auth/Auth';

class App extends Component {
  render() {
    return (
      <Layout>
        <Route path='/checkout' component={Checkout} />
        <Route path='/orders' component={Orders} />
        <Route path='/auth' component={Auth} />
        <Route path='/' exact component={BurgerBuilder} />
      </Layout>
    );
  }
}

export default App;
