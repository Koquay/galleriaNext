import { combineReducers } from "redux";
import { HomeReducer } from "../../components/helpers/home/HomeReducer";
import { FooterReducer } from "../helpers/footer/FooterReducer";
import { ProductReducer } from "../helpers/product/ProductReducer";
import { ProductFilterReducer } from "../helpers/products/ProductFilterReducer";
import { UserReducer } from "../helpers/user/UserReducer";
import { CartReducer } from "../helpers/cart/CartReducer";
import { CheckoutReducer } from "../helpers/checkout/CheckoutReducer";
import { ProductSidebarReducer } from "../helpers/products/ProductSidebarReducer";

export default combineReducers({
  home: HomeReducer,
  footer: FooterReducer,
  product: ProductReducer,
  productFilter: ProductFilterReducer,
  productSidebar: ProductSidebarReducer,
  user: UserReducer,
  cart: CartReducer,
  checkout: CheckoutReducer,
});
