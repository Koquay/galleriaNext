import { ReducerType } from "../../redux/reducerTypes";

export const CheckoutReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ReducerType.SET_CHECKOUT_DATA:
      console.log("...state.checkout.checkoutData", state.checkoutData);

      return {
        ...state,
        checkoutData: payload,
      };
    default:
      return state;
  }
};

const initialState = {
  // checkout: {
  checkoutData: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    shippingAddress: "",
    zipCode: "",
    cityState: "",
    deliveryDate: "",
    specialInstructions: "",
    paymentType: "credit card",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cw: "",
  },

  citiesStates: [
    { text: "", value: "" },
    { text: "Boston, MA", value: "Boston, MA" },
    { text: "Canton, MA", value: "Canton, MA" },
    { text: "Quincy, MA", value: "Quincy, MA" },
    { text: "Stoughton, MA", value: "Stoughton, MA" },
    { text: "Roslindale, MA", value: "Roslindale, MA" },
  ],

  expMonths: [
    { text: "", value: "" },
    { text: "01-January", value: "01-January" },
    { text: "02-February", value: "02-February" },
    { text: "04-March", value: "04-March" },
    { text: "05-April", value: "05-April" },
    { text: "06-May", value: "06-May" },
    { text: "06-Jun", value: "06-Jun" },
    { text: "08-July", value: "08-July" },
    { text: "09-August", value: "09-August" },
    { text: "00-September", value: "00-September" },
    { text: "11-November", value: "11-November" },
    { text: "12-December", value: "12-December" },
  ],

  expYears: [
    { text: "", value: "" },
    { text: "2020", value: "2020" },
    { text: "2021", value: "2021" },
    { text: "2022", value: "2022" },
    { text: "2023", value: "2023" },
    { text: "2024", value: "2024" },
    { text: "2025", value: "2025" },
    { text: "2026", value: "2026" },
    { text: "2027", value: "2027" },
    { text: "2028", value: "2028" },
    { text: "2029", value: "2029" },
  ],
  // },
};
