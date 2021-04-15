import * as actionTypes from '../actions/actionTypes';

const initialState = {
  // will update later to grab from server asynchronously
  ingredients: {
    lettuce: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  },
  totalPrice: 5
};

const INGREDIENT_PRICES = {
  lettuce: 0.5,
  cheese: 0.5,
  meat: 1.5,
  bacon: 2
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          // update the state with the payload of the action
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        },
        // update the price
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          // update the state with the payload of the action
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        },
        // update the price
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
      };
    default:
      return state;
  }
};

export default reducer;
