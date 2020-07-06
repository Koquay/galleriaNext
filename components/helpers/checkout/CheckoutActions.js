import { ReducerType } from "../../redux/reducerTypes";
import baseUrl from "../../../utils/baseUrl";
import cookie from "js-cookie";
import Axios from "axios";

export const placeOrder = (checkoutData) => (dispatch) => {
  console.log("placeorder", checkoutData);

  const url = `${baseUrl}/api/checkout`;
  const payload = { checkoutData };
  const token = cookie.get("token");
  const headers = { headers: { Authorization: token } };

  const result = Axios.post(url, payload, headers).then((response) => {
    console.log("checkout", response.data);
    dispatch({
      type: ReducerType.SET_CHECKOUT_DATA,
      payload: checkoutData,
    });
    return response.data;
  });

  return result;
};

export const errorMessagesTemplate = {
  firstName: { error: false, errorMsg: "" },
  lastName: { error: false, errorMsg: "" },
  email: { error: false, errorMsg: "" },
  phone: { error: false, errorMsg: "" },
  shippingAddress: { error: false, errorMsg: "" },
  zipCode: { error: false, errorMsg: "" },
  cityState: { error: false, errorMsg: "" },
  deliveryDate: { error: false, errorMsg: "" },
  specialInstructions: { error: false, errorMsg: "" },
  paymentType: { error: false, errorMsg: "" },
  cardNumber: { error: false, errorMsg: "" },
  expMonth: { error: false, errorMsg: "" },
  expYear: { error: false, errorMsg: "" },
  cw: { error: false, errorMsg: "" },
};
