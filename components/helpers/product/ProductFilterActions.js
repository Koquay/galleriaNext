import React from "react";
import Axios from "axios";
import cookie from "js-cookie";

import baseUrl from "../../../utils/baseUrl";
import catchErrors from "../../../utils/catchErrors";
import { ReducerType } from "../../redux/reducerTypes";

export const setProduct = (productId) => (dispatch) => {
  console.log("productId", productId);
  dispatch({
    type: ReducerType.SET_PRODUCT,
    payload: productId,
  });
};

// export const getCollection = (description) => (dispatch) => {
//   console.log("description", description);
//   const url = `${baseUrl}/api/collection`;

//   const token = cookie.get("token");
//   const headers = { headers: { Authorization: token } };
//   const payload = { params: [] };
// };
