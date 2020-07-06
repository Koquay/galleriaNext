import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "material-ui-rating";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Favorite from "@material-ui/icons/Favorite";
import Highlight from "@material-ui/icons/Highlight";
import MonetizationOn from "@material-ui/icons/MonetizationOn";
import CameraAlt from "@material-ui/icons/CameraAlt";
import Flight from "@material-ui/icons/Flight";
import Search from "@material-ui/icons/Search";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";

import { addToCart } from "../../helpers/cart/CartActions";
import Error from "../utils/Error";

const Product = ({ product, products, brands, addToCart }) => {
  const [currentImage, setCurrentImage] = useState(product.images[0]);
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState("");
  const [error, setError] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const classes = useStyles();

  console.log("products", products);

  const relatedProducts = products.sort().slice(0, 5);
  const brandDisplay = brands.sort().slice(0, 6);

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const addProductToCart = () => {
    console.log("!quantity || !size", !quantity, !size);

    if (!quantity || !size) {
      setErrorMessage("Size and quantity are required");
      setError(true);
    } else {
      const payload = {
        productId: product._id,
        size: size,
        quantity: quantity,
      };

      addToCart(payload);
    }
  };

  const resetError = () => {
    setError(false);
    setErrorMessage("");
  };

  return (
    <div className="section mt-5">
      {error && <Error errorMessage={errorMessage} resetError={resetError} />}
      <div className="row">
        <div className="col-12 col-md-5">
          <Grid container>
            <Grid item xs={12}>
              <img
                className="card-img w-100 d-block"
                src={`/static/img/${currentImage}`}
              />
            </Grid>
          </Grid>
          <div
            className="row mt-4"
            style={{ display: "flex", justifyContent: "center" }}
          >
            {product.images.map((image) => (
              <Grid item xs={4} key={image}>
                <a onClick={() => setCurrentImage(image)}>
                  <img
                    className="card-img w-100 d-block"
                    src={`/static/img/${image}`}
                  />
                </a>
              </Grid>
            ))}
          </div>
        </div>
        <Grid container xs={12} md={6}>
          <Grid item>
            <Typography variant="h5">{product.name}</Typography>
            <Rating value={product.rating} max={5} size="small" readOnly />
            <Typography variant="h5" gutterBottom>
              ${product.price}
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              style={{
                borderTop: "1px solid #cccccc",
                borderBottom: "1px solid #cccccc",
                padding: "20px 0",
                lineHeight: "1.8rem",
                color: "#6e6e6e",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam. consectetur,
              neque doloribus, cupiditate numquam dignissimos laborum fugiat
              deleniti? Eum quasi quidem quibusdam.
            </Typography>
            <Grid
              container
              direction="row"
              spacing={3}
              className={classes.sizeGrid}
            >
              <Grid item>
                <FormControl variant="outlined">
                  <InputLabel id="size-label">Size</InputLabel>
                  <Select
                    labelId="size-label"
                    id="size"
                    value={size}
                    onChange={handleSizeChange}
                    label="Size"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"S"}>S</MenuItem>
                    <MenuItem value={"M"}>M</MenuItem>
                    <MenuItem value={"L"}>L</MenuItem>
                    <MenuItem value={"X"}>XL</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl variant="outlined">
                  <InputLabel id="quantity-label">Qty</InputLabel>
                  <Select
                    labelId="quantity-label"
                    id="quantity"
                    value={quantity}
                    onChange={handleQuantityChange}
                    label="Quantity"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              spacing={4}
              alignItems="center"
              className={classes.sizeGrid}
            >
              <Grid item>
                <Button
                  variant="contained"
                  className={classes.addToCartBtn}
                  onClick={() => addProductToCart()}
                >
                  Add To Cart
                </Button>
              </Grid>
              <Grid item>
                <Favorite className={classes.socialIcon} />
              </Grid>
              <Grid item>
                <Search className={classes.socialIcon} />
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              spacing={2}
              alignItems="center"
              className={classes.shareGrid}
            >
              <Grid item>
                <Typography variant="h5">SHARE</Typography>
              </Grid>
              <Grid item>
                <Highlight className={classes.socialIcon} />
              </Grid>
              <Grid item>
                <MonetizationOn className={classes.socialIcon} />
              </Grid>
              <Grid item>
                <CameraAlt className={classes.socialIcon} />
              </Grid>
              <Grid item>
                <Flight className={classes.socialIcon} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Grid container className={classes.pageSection}>
        <Grid item>
          <Typography variant="body1" className={classes.description}>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiatLorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit.
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.pageSection} justify="center">
        <Typography variant="h5" gutterBottom>
          RELATED PRODUCTS
        </Typography>
        <Grid container spacing={1}>
          {relatedProducts.map((product) => (
            <Grid item key={product._id} className={classes.relatedProduct}>
              <img src={`/static/img/${product.images[0]}`} />
              <Grid item className={classes.namePrice}>
                <Typography variant="body1">{product.name}</Typography>
                <Typography variant="body1">${product.price}</Typography>
              </Grid>

              <Rating
                value={product.rating}
                max={5}
                size="small"
                className={classes.rating}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid container className={(classes.pageSection, classes.brandDisplay)}>
        {brandDisplay.map((brand) => (
          <Grid item key={brand.image}>
            <img className="img-fluid" src={`static/img/${brand.image}`} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const useStyles = makeStyles({
  sizeGrid: {
    // marginTop: "1rem",
    borderBottom: "1px solid #cccccc",
    paddingTop: "2rem",
    paddingBottom: "1.25rem",
  },
  shareGrid: {
    // borderBottom: "1px solid #cccccc",
    paddingTop: "2rem",
    paddingBottom: "1.25rem",
  },
  addToCartBtn: {
    background: "#303030",
    color: "white",
  },
  description: {
    lineHeight: "1.8rem",
    color: "#6e6e6e",
  },
  pageSection: {
    marginTop: "4rem",
  },
  gridList: {
    width: 500,
    height: 450,
  },
  relatedProduct: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  brandDisplay: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: "4rem",
  },
  namePrice: {
    display: "flex",
    justifyContent: "space-around",
  },
  rating: {
    // marginLeft: ".5rem",
    color: "red",
  },
  socialIcon: {
    // border: "1px solid",
    // padding: "6px",
  },
});

const mapStateToProps = (state) => ({
  brands: state.home.brands,
});

export default connect(mapStateToProps, { addToCart })(Product);
