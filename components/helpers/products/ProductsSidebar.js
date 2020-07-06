import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import { productSidebarFilters } from "./ProductSidebarFilters";
import { filterProducts, setCategoryItemChecked } from "./ProductFilterAction";

import styles from "./ProductsSidebar.module.css";
import Slider from "@material-ui/core/Slider";

const ProductsSidebar = ({
  filterProducts,
  setCategoryItemChecked,
  minMaxPrices,
}) => {
  useEffect(() => {
    setValue(minMaxPrices.minPrice);
  }, []);
  const classes = useStyles();
  console.log("minMaxPrices", minMaxPrices);

  const { minPrice, maxPrice } = minMaxPrices;
  const [value, setValue] = useState(minPrice);
  const { categories } = productSidebarFilters;

  const handleCheckboxChange = (categoryName, categoryItem) => {
    setCategoryItemChecked(productSidebarFilters, categoryName, categoryItem);
    filterProducts(productSidebarFilters, categoryName, categoryItem);
  };

  const handlePriceChange = (event, changedValue) => {
    console.log("changedValue", changedValue);
    productSidebarFilters.priceFilter.filterPrice.minPrice = changedValue;
    productSidebarFilters.priceFilter.filterPrice.maxPrice = maxPrice;
    console.log(
      "productSidebarFilters.filterPrice",
      productSidebarFilters.filterPrice
    );
    filterProducts(productSidebarFilters);
  };

  return (
    <div>
      <div className="row">
        <div className="col-12">
          <h6 className="font-weight-bold">{categories.title}</h6>
          <hr className="mt-0" />
        </div>
        <div className="col pr-0">
          <div role="tablist" id="accordion-1">
            {categories.category.map((category) => (
              <div
                className="card"
                className={`${styles.card} card`}
                key={category.name}
              >
                <div
                  className={`${styles.cardHeader} card-header py-0`}
                  role="tab"
                >
                  <h6 className={`${styles.cardHeaderH6} mb-0`}>
                    <a
                      data-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="accordion-1 .item-1"
                      href={`#accordion-1 ${category.href}`}
                      className="w-100 font-weight-bold"
                    >
                      {category.name}
                      <i className="fa fa-plus"></i>
                    </a>
                  </h6>
                </div>
                <div
                  className={`collapse ${category.class}`}
                  role="tabpanel"
                  data-parent="#accordion-1"
                >
                  <div className={`${styles.cardBody} card-body py-1`}>
                    <ul className="pl-2 list-unstyled mt-2 mb-0">
                      {category.items.map((item) => (
                        <li key={item.name}>
                          <input
                            type="checkbox"
                            className="mr-2"
                            onChange={() =>
                              handleCheckboxChange(category.name, item)
                            }
                          />
                          <label>
                            {item.name}
                            <br />
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <hr />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col">
          <div className="row">
            <div className="col">
              <h6 className="font-weight-bold">PRICE</h6>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <ThemeProvider theme={priceSlider}>
                <Slider
                  value={value}
                  defaultValue={100}
                  valueLabelDisplay="auto"
                  step={1}
                  min={minPrice}
                  max={maxPrice}
                  type="number"
                  onChange={handlePriceChange}
                  // className={classes.slider}
                />
              </ThemeProvider>
            </div>
          </div>
          <div className="row">
            <div className="col d-flex justify-content-between">
              <span>${minPrice}</span>
              <span>${maxPrice}</span>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col">
          <h6 className="font-weight-bold">
            <strong>COLOR</strong>
          </h6>
          <div className="row">
            <div className="col d-flex justify-content-between" id="colors">
              <a href="#">
                <i className={`${styles.red} fa fa-square`}></i>
              </a>
              <a href="#">
                <i className={`${styles.brown} fa fa-square`}></i>
              </a>
              <a href="#">
                <i className={`${styles.black} fa fa-square`}></i>
              </a>
              <a href="#">
                <i className={`${styles.blue} fa fa-square`}></i>
              </a>
              <a href="#">
                <i className={`${styles.green} fa fa-square`}></i>
              </a>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col">
          <h6 className="font-weight-bold">
            <strong>SIZE</strong>
          </h6>
          <div className="row">
            <div
              className={`${styles.size} col d-flex justify-content-between`}
              id="size"
            >
              <a href="#">
                <span>XS</span>
              </a>
              <a href="#">
                <span>S</span>
              </a>
              <a href="#">
                <span>M</span>
              </a>
              <a href="#">
                <span>L</span>
              </a>
              <a href="#">
                <span>XL</span>
              </a>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

const priceSlider = createMuiTheme({
  overrides: {
    MuiSlider: {
      root: {
        color: "black",
        height: 8,
      },
      thumb: {
        height: 16,
        // width: 24,
        // backgroundColor: "#fff",
        // border: "2px solid currentColor",
        // marginTop: -8,
        // marginLeft: -12,
        // "&:focus,&:hover,&$active": {
        //   boxShadow: "inherit",
        // },
      },
      active: {},
      // valueLabel: {
      //   left: "calc(-50% + 14px)",
      //   top: -22,
      //   "& *": {
      //     background: "transparent",
      //     color: "#000",
      //   },
      // },
      track: {
        height: 20,
        // borderRadius: 4,
      },
      rail: {
        height: 8,
        // borderRadius: 4,
      },
    },
  },
});

const useStyles = makeStyles({
  sizeGrid: {
    marginTop: "2rem",
  },
});

const mapStateToProps = (state) => ({
  productSidebar: state.productSidebar,
  minMaxPrices: state.product.minMaxPrices,
});

export default connect(mapStateToProps, {
  filterProducts,
  setCategoryItemChecked,
})(ProductsSidebar);
