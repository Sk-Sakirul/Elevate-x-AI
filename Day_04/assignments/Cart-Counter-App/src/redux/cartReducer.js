// Action Types
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const RESET_CART = "RESET_CART";

// Actions
export function addToCart() {
  return {
    type: ADD_TO_CART,
  };
}

export function removeFromCart() {
  return {
    type: REMOVE_FROM_CART,
  };
}

export function resetCart() {
  return {
    type: RESET_CART,
  };
}

const initialState = {
  cartCount: 0,
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartCount: state.cartCount + 1,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartCount: state.cartCount - 1,
      };
    case RESET_CART:
      return {
        ...state,
        cartCount: 0,
      };
    default:
      return state;
  }
}


export default cartReducer;