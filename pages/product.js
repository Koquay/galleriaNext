import React from "react";
import { connect } from "react-redux";
import SectionBanner from "../components/helpers/utils/SectionBanner";
import Product from "../components/helpers/product/Product";

const product = ({ product, products }) => {
  console.log("product selected", product);
  return (
    <div className="container">
      <SectionBanner section="PRODUCT" />
      <Product product={product} products={products} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  product: state.product.product,
  products: state.product.products,
});

export default connect(mapStateToProps)(product);
