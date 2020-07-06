import baseUrl from "../../../utils/baseUrl";
import cookie from "js-cookie";
import Axios from "axios";
import { ReducerType } from "../../redux/reducerTypes";

export const filterProducts = (inFilters) => (dispatch) => {
  const url = `${baseUrl}/api/products`;
  const token = cookie.get("token");
  const headers = { Authorization: { token } };
  const filters = createFilters(inFilters);
  const payload = { params: { filters } };

  Axios.get(url, payload, headers)
    .then((response) => {
      console.log("response.data", response.data);
      dispatch({
        type: ReducerType.SET_PRODUCTS,
        payload: response.data,
      });
      dispatch({
        type: ReducerType.SET_MINMAX_PRICE,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.error("error", error.response);
    });
};

export const setCategoryItemChecked = (filters, categoryName, categoryItem) => (
  dispatch
) => {
  const { category } = filters.categories;
  // console.log("category", category);
  const targetCategory = category.find((cat) => cat.name === categoryName);
  // console.log("targetCategory", targetCategory);
  const targetItem = targetCategory.items.find(
    (item) => item.name === categoryItem.name
  );
  // console.log("targetItem", targetItem);
  targetItem.checked = !targetItem.checked;
  // console.log("targetItem", targetItem);
  // console.log("targetCategory", targetCategory);
};

const createFilters = (collection) => {
  const { category } = collection.categories;
  const { filterPrice } = collection.priceFilter;

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

  console.log("filterPrice", filterPrice);

  return { categoryFilters, filterPrice };
};
