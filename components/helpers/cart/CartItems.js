import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { connect } from "react-redux";

import {
  Menu,
  Container,
  Image,
  Icon,
  Input,
  Responsive,
  Grid,
  Header,
  Button,
  Card,
  Rating,
  List,
  Select,
  Label,
  Table,
} from "semantic-ui-react";
import Link from "next/link";

const CartItems = ({ cart, handleDelete }) => {
  console.log("cart", cart);

  const toFixed = (value) => {
    return Number.parseFloat(value).toFixed(2);
  };

  const getSubtotal = () => {
    let subtotal = cart.products.reduce((acc, product) => {
      return (acc += product.product.price);
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
    <Grid stackable>
      <Grid.Row>
        <Grid.Column>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>PRODUCT</Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell style={{ textAlign: "center" }}>
                  PRICE
                </Table.HeaderCell>
                <Table.HeaderCell style={{ textAlign: "center" }}>
                  QUANTITY
                </Table.HeaderCell>
                <Table.HeaderCell style={{ textAlign: "center" }}>
                  TOTAL
                </Table.HeaderCell>
                <Table.HeaderCell style={{ textAlign: "center" }}>
                  ACTION
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {cart.products.map((item) => (
                <Table.Row key={item._id}>
                  <Table.Cell
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Image
                      src={`/static/img/${item.product.images[0]}`}
                      size="tiny"
                    />
                  </Table.Cell>
                  <Table.Cell>{item.product.name}</Table.Cell>
                  <Table.Cell style={{ textAlign: "center" }}>
                    ${toFixed(item.product.price)}
                  </Table.Cell>
                  <Table.Cell style={{ textAlign: "center" }}>
                    {item.quantity}
                  </Table.Cell>
                  <Table.Cell style={{ textAlign: "center" }}>
                    ${toFixed(item.product.price * item.quantity)}
                  </Table.Cell>
                  <Table.Cell style={{ textAlign: "center" }}>
                    <Link href="">
                      <a onClick={() => handleDelete(item.product._id)}>
                        <Icon
                          name="delete"
                          color="red"
                          bordered
                          style={{ width: "2rem" }}
                        />
                      </a>
                    </Link>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
          <Grid stackable>
            <Grid.Row style={{ marginTop: "0rem" }}>
              <Grid.Column width="3">
                <Button
                  // basic
                  // red
                  size="small"
                  style={{
                    background: "white",
                    color: "#ff5555",
                    border: "1px solid #ff5555",
                    borderRadius: "0",
                  }}
                >
                  CONTINUE SHOPPING
                </Button>
              </Grid.Column>
              <Grid.Column width="3">
                <Button
                  size="small"
                  style={{
                    background: "white",
                    color: "#ff5555",
                    border: "1px solid #ff5555",
                    borderRadius: "0",
                  }}
                >
                  UPDATE CART
                </Button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns="3" style={{ paddingTop: "0" }}>
              <Grid.Column width="12"></Grid.Column>
              <Grid.Column
                width="2"
                style={{
                  textAlign: "right",
                }}
              >
                Subtotal
              </Grid.Column>
              <Grid.Column
                width="2"
                style={{
                  textAlign: "right",
                }}
              >
                ${toFixed(getSubtotal())}
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns="3" style={{ paddingTop: "0" }}>
              <Grid.Column width="12"></Grid.Column>
              <Grid.Column
                width="2"
                style={{
                  textAlign: "right",
                }}
              >
                Tax
              </Grid.Column>
              <Grid.Column
                width="2"
                style={{
                  textAlign: "right",
                }}
              >
                ${toFixed(getTax())}
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns="3" style={{ paddingTop: "0" }}>
              <Grid.Column width="12"></Grid.Column>
              <Grid.Column
                width="2"
                style={{
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  textAlign: "right",
                }}
              >
                Total
              </Grid.Column>
              <Grid.Column
                width="2"
                style={{
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  textAlign: "right",
                }}
              >
                ${toFixed(getTotal())}
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns="2" style={{ paddingTop: "0" }}>
              <Grid.Column width="13"></Grid.Column>

              <Grid.Column width="3" style={{}}>
                <Button
                  size="small"
                  style={{
                    background: "black",
                    color: "white",
                    width: "100%",
                    borderRadius: "0",
                  }}
                >
                  CHECKOUT
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default CartItems;
