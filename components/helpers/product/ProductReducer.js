import { ReducerType } from "../../redux/reducerTypes";

export const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ReducerType.SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };

    case ReducerType.SET_MINMAX_PRICE:
      if (!state.minMaxPrices.minPrice) {
        const minMaxPrices = setMinMaxPrices(payload);
        console.log("minMax", minMaxPrices);
        return {
          ...state,
          minMaxPrices: minMaxPrices,
        };
      }

    case ReducerType.SET_PRODUCT:
      return {
        ...state,
        product: state.products.find((product) => product._id === payload),
      };

    default:
      return state;
  }
};

const setMinMaxPrices = (products) => {
  let priceArray = [];

  products.map((product) => {
    priceArray.push(product.price);
  });

  priceArray = priceArray.sort();
  const maxPrice = priceArray.pop();
  const minPrice = priceArray.shift();

  return { minPrice, maxPrice };
};

const initialState = {
  products: [],
  product: {},
  minMaxPrices: { minPrice: 0, maxPrice: 0 },
};
