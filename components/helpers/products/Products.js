import React, { useEffect } from "react";
import { connect } from "react-redux";

import Link from "next/link";
import styles from "./Products.module.css";
import Rating from "material-ui-rating";

import { toFixed } from "../utils/FormatCurrency";
import Pagination from "../utils/Pagination";
import { filterProducts } from "./ProductFilterAction";
import { setProduct } from "../product/ProductAction";
import { productSidebarFilters } from "./ProductSidebarFilters";

const Products = ({ filterProducts, product, setProduct }) => {
  const { products } = product;

  useEffect(() => {
    filterProducts(productSidebarFilters);
  }, []);

  console.log("product", product);
  console.log("products", products);

  const handleProductSelect = (productId) => {
    console.log("************ product selected", productId);
    setProduct(productId);
  };

  return (
    <>
      <div className="row">
        {products.map((product) => (
          <div
            className="col-12 col-md-4 col-lg-3 mb-2 mb-md-4"
            key={product._id}
          >
            <Link href={`/product?${product._id}`}>
              <a onClick={() => handleProductSelect(product._id)}>
                <div className={`${styles.card}`}>
                  <img
                    className={`${styles.imgTop} img-fluid card-img-top w-100 d-block`}
                    src={`/static/img/${product.images[0]}`}
                  />
                  <img
                    className={`${styles.img2} card-img w-100 d-block img-2`}
                    src={`/static/img/${product.images[1]}`}
                    style={{ opacity: "1" }}
                  />
                  <div className={`${styles.cardBody} card-body`}>
                    <span className="d-block">{product.name}</span>
                    <span className="d-inline-block mr-2 strike-through">
                      ${toFixed(product.list_price, 0)}
                    </span>
                    <span className="d-inline-block font-weight-bold">
                      ${toFixed(product.price, 0)}
                    </span>
                    <div className={`${styles.rating}`}>
                      <Rating
                        value={product.rating}
                        max={5}
                        size="small"
                        // onChange={(value) => onRatingChange(value)}
                      />
                    </div>
                  </div>
                  <div className={`${styles.productActions}`}>
                    <i className="fa fa-search"></i>
                    <i className="fa fa-heart"></i>
                    <i className="fa fa-cart-arrow-down"></i>
                  </div>
                  <div className={`${styles.addToCart}`}>
                    <span>Add to Cart</span>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>

      <Pagination />
    </>
  );
};

const mapStateToProps = (state) => ({
  // productFilter: state.productFilter,
  product: state.product,
});

export default connect(mapStateToProps, { filterProducts, setProduct })(
  Products
);
