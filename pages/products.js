import React from "react";
import SectionBanner from "../components/helpers/utils/SectionBanner";
import Products from "../components/helpers/products/Products";
import ProductsSidebar from "../components/helpers/products/ProductsSidebar";

const products = () => {
  return (
    <div className="container">
      <SectionBanner section={"PRODUCTS"} />
      <div className="row mt-5">
        <div className="col-12 col-md-2">
          <ProductsSidebar />
        </div>
        <div className="col">
          <Products />
        </div>
      </div>
    </div>
  );
};

export default products;
