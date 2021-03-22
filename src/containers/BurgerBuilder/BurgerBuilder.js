import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';

export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      //name: amount
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  };
  render() {
    return (
      <Auxiliary>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </Auxiliary>
    );
  }
}
