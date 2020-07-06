import baseUrl from "../../../utils/baseUrl";
import cookie from "js-cookie";
import Axios from "axios";
import { ReducerType } from "../../redux/reducerTypes";

export const addToCart = (payload) => (dispatch) => {
  console.log("add to cart", payload);
  const token = cookie.get("token");
  const headers = { headers: { Authorization: token } };
  const url = `${baseUrl}/api/cart`;

  Axios.put(url, payload, headers)
    .then((response) => {
      console.log("response.data", response.data);
      dispatch({
        type: ReducerType.SET_CART,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.error(error);
    });
};
