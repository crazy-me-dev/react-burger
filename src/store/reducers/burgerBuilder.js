import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  // will update later to grab from server asynchronously
  ingredients: null,
  totalPrice: 5,
  error: false
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
      const updatedIngredient = {
        // update the state with the payload of the action
        [action.ingredientName]: state.ingredients[action.ingredientName] + 1
      };
      const updatedIngredients = updateObject(
        state.ingredients,
        updatedIngredient
      );
      const updatedState = {
        ingredients: updatedIngredients,
        // update the price
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
      };
      return updateObject(state, updatedState);
    case actionTypes.REMOVE_INGREDIENT:
      const updateIngredient = {
        // update the state with the payload of the action
        [action.ingredientName]: state.ingredients[action.ingredientName] - 1
      };
      const updateIngredients = updateObject(
        state.ingredients,
        updateIngredient
      );
      const updateState = {
        ingredients: updateIngredients,
        // update the price
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
      };
      return updateObject(state, updateState);
    case actionTypes.SET_INGREDIENTS:
      return updateObject(state, {
        // defines the order of the ingredients manually because firebase sorts ingredients alphabetically
        ingredients: {
          lettuce: action.ingredients.lettuce,
          bacon: action.ingredients.bacon,
          cheese: action.ingredients.cheese,
          meat: action.ingredients.meat
        },
        totalPrice: 5,
        error: false
      });
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return updateObject(state, { error: true });
    default:
      return state;
  }
};

export default reducer;
