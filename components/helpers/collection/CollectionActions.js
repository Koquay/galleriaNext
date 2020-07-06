import baseUrl from "../../../utils/baseUrl";
import cookie from "js-cookie";
import Axios from "axios";
import { ReducerType } from "../../redux/reducerTypes";

export const filterCollection = (collection) => (dispatch) => {
  const url = `${baseUrl}/api/collection`;
  const token = cookie.get("token");
  const headers = { Authorization: { token } };
  const filters = createFilters(collection);
  const payload = { params: { filters } };

  Axios.get(url, payload, headers)
    .then((response) => {
      // console.log("response.data", response.data);
      dispatch({
        type: ReducerType.SET_PRODUCTS,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.error("error", error.response);
    });
};

const createFilters = (collection) => {
  const { category } = collection.categories;
  const { priceRange } = collection.priceFilter;

  let categoryFilters = [];
  let tmpCategoryFilters = [];

  for (let category of category) {
    const filterItems = category.items.filter((item) => item.checked === true);
    if (filterItems.length) {
      tmpCategoryFilters.push(filterItems);
    }
  }

  tmpCategoryFilters = tmpCategoryFilters.flat();

  for (let filter of tmpCategoryFilters) {
    categoryFilters.push(filter.name);
  }

  console.log("priceRange", priceRange);

  return { categoryFilters, priceRange };
};
