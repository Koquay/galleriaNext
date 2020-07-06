import { ReducerType } from "../../redux/reducerTypes";

export const CartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ReducerType.SET_CART:
      return {
        ...state,
        cart: payload,
      };
    default:
      return state;
  }
};

const initialState = {
  cart: {},
};
