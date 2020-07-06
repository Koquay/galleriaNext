import baseUrl from "../../../utils/baseUrl";
import cookie from "js-cookie";
import Router from "next/router";
import Axios from "axios";
import { ReducerType } from "../../redux/reducerTypes";
import catchErrors from "../../../utils/catchErrors";

export const login = (payload, router) => (dispatch) => {
  console.log("payload", payload);
  const url = `${baseUrl}/api/login`;

  Axios.post(url, payload)
    .then((response) => {
      console.log("cart", response.data.cart);

      dispatch({
        type: ReducerType.SET_CART,
        payload: response.data.cart,
      });

      dispatch({
        type: ReducerType.SET_LOGGEDIN,
        payload: true,
      });

      cookie.set("token", response.data.token);
      Router.push("/");
    })
    .catch((error) => {
      console.log("error", error);
      catchErrors(error, window.alert);
    });
};

export const signup = (payload, router) => (dispatch) => {
  console.log("payload", payload);
  const url = `${baseUrl}/api/signup`;

  Axios.post(url, payload)
    .then((response) => {
      console.log("response.data", response.data);
      handleLogin(response.data.token);
      dispatch({
        type: ReducerType.SET_CART,
        payload: response.data.cart,
      });

      router.push("/");
    })
    .catch((error) => {
      console.log("error", error);
      catchErrors(error, window.alert);
    });
};

export const logout = () => (dispatch) => {
  dispatch({
    type: ReducerType.SET_LOGGEDIN,
    payload: false,
  });

  cookie.remove("token");
  Router.push("/login");
};
