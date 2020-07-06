import { ReducerType } from "../../redux/reducerTypes";

export const UserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ReducerType.SET_LOGGEDIN:
      return {
        ...state,
        loggedIn: payload,
      };

    default:
      return state;
  }
};

const initialState = {
  loggedIn: false,
};
