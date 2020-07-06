import { ReducerType } from "../../redux/reducerTypes";

export const setProduct = (productId) => (dispatch) => {
  dispatch({
    type: ReducerType.SET_PRODUCT,
    payload: productId,
  });
};
