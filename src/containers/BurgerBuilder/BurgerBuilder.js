import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';

export default class BurgerBuilder extends Component {
  state = {};
  render() {
    return (
      <Auxiliary>
        <div>Burger</div>
        <div>Build Controls</div>
      </Auxiliary>
    );
  }
}
