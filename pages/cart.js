import React from "react";

import Link from "next/link";
import ShopBanner from "../components/helpers/utils/ShopBanner";
import CartItems from "../components/helpers/cart/CartItems";
import { parseCookies } from "nookies";
import baseUrl from "../utils/baseUrl";
import Axios from "axios";
import cookie from "js-cookie";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Clear from "@material-ui/icons/Clear";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";

const Cart = ({ cart }) => {
  console.log("cart", cart);
  const classes = useStyles();

  const handleDelete = async (productId) => {
    const url = `${baseUrl}/api/cart`;
    const token = cookie.get("token");

    const payload = {
      params: { productId },
      headers: { Authorization: token },
    };

    try {
      const response = await Axios.delete(url, payload);
      console.log("response.data", response.data);
    } catch (error) {
      console.error("Error deleting cart item: ", error);
    }
  };

  const toFixed = (value) => {
    return Number.parseFloat(value).toFixed(2);
  };

  const getSubtotal = () => {
    let subtotal = cart.products.reduce((acc, product) => {
      return (acc += product.product.price * (product.quantity || 1));
    }, 0);

    console.log("subtotal", subtotal);
    return subtotal;
  };

  const getTotal = () => {
    return getSubtotal() + getTax();
  };

  const getTax = () => {
    return 0.05 * getSubtotal();
  };

  return (
    <>
      <Container className={classes.root}>
        <Grid container>
          <Grid item>
            <ShopBanner section="CART" />
          </Grid>
          <Grid item className={classes.table}>
            <TableContainer
              component={Paper}
              className={classes.tableContainer}
            >
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">PRODUCT</TableCell>
                    <TableCell align="left">NAME</TableCell>
                    <TableCell align="right">PRICE</TableCell>
                    <TableCell align="center">QUANTITY</TableCell>
                    <TableCell align="right">TOTAL</TableCell>
                    <TableCell align="center">DELETE</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cart.products.map((item) => (
                    <TableRow key={item._id}>
                      <TableCell align="center">
                        <img
                          src={`/static/img/${item.product.images[0]}`}
                          className={classes.img}
                        />
                      </TableCell>
                      <TableCell align="left">{item.product.name}</TableCell>
                      <TableCell align="right">
                        ${toFixed(item.product.price)}
                      </TableCell>
                      <TableCell align="center">{item.quantity}</TableCell>
                      <TableCell align="right">
                        ${toFixed(item.product.price * item.quantity)}
                      </TableCell>
                      <TableCell align="center">
                        <IconButton
                          className={classes.deleteBtn}
                          size="small"
                          aria-label="delete button"
                          onClick={() => handleDelete(item.product._id)}
                        >
                          <Clear className={classes.deleteIcon} />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell rowSpan={4} />
                    <TableCell align="right" colSpan={3}>
                      Subtotal
                    </TableCell>
                    <TableCell align="right">
                      ${toFixed(getSubtotal())}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="right" colSpan={3}>
                      Tax
                    </TableCell>
                    <TableCell align="right">${toFixed(getTax())}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      align="right"
                      colSpan={3}
                      className={classes.total}
                    >
                      Total
                    </TableCell>
                    <TableCell align="right" className={classes.total}>
                      ${toFixed(getTotal())}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={3} />
                    <TableCell>
                      <Button
                        variant="contained"
                        className={classes.checkout}
                        href="/checkout"
                      >
                        CHECKOUT
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "1140px",
  },
  table: {
    maxWidth: 1140,
    width: 1090,
    minWidth: 650,
  },
  img: {
    width: "10rem",
  },
  total: {
    fontWeight: "bold",
    fontSize: "1.2rem",
  },
  checkout: {
    background: "#303030 !important",
    color: "white !important",
  },
  tableContainer: {
    marginTop: "3rem",
  },
  deleteBtn: {
    background: "white",
  },
  deleteIcon: {
    color: "red",
  },
}));

Cart.getInitialProps = async (ctx) => {
  const token = cookie.get("token");
  console.log("token", token);

  if (!token) {
    return { products: [] };
  }

  const url = `${baseUrl}/api/cart`;
  const payload = { headers: { Authorization: token } };
  const response = await Axios.get(url, payload);
  console.log("cart", response.data);
  return { cart: response.data };
};

export default Cart;
