import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  render() {
    return (
      <Layout>
        <Route path='/checkout' component={Checkout} />
        <Route exact path='/' component={BurgerBuilder} />
      </Layout>
    );
  }
}

export default App;
