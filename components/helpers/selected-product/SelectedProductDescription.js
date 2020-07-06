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
} from "semantic-ui-react";
import Link from "next/link";

import { addToCart } from "../../helpers/cart/CartActions";

const SelectedProductDescription = ({ product, addToCart }) => {
  const [orderSize, setOrderSize] = useState("M");
  const [orderQuantity, setOrderQuantity] = useState(1);

  const addProductToCart = () => {
    const payload = {
      productId: product._id,
      size: orderSize,
      quantity: orderQuantity,
    };

    addToCart(payload);
  };

  const toFixed = (value) => {
    return "$" + value.toFixed(2);
  };

  const handleQuantityChanged = (event, data) => {
    setOrderQuantity(data.value);
  };
  const handleSizeChanged = (event, data) => {
    setOrderSize(data.value);
  };

  return (
    <Grid stackable style={{ marginTop: "0rem" }}>
      <Header as="h2" content={product.name} style={{ marginBottom: "0" }} />
      <Grid.Row>
        <Grid.Column>
          <Rating
            maxRating={5}
            rating={product.rating}
            icon="star"
            size="small"
          />
        </Grid.Column>
      </Grid.Row>
      <Header
        as="h3"
        content={toFixed(product.price)}
        style={{ margin: "0" }}
      />
      <Grid.Row>
        <Grid.Column>
          <p>Only 25 left in stock.</p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <p
            style={{
              borderBottom: "1px solid #cccccc",
              borderTop: "1px solid #cccccc",
              padding: "2rem 0",
              color: "#767676",
              lineHeight: "1.5rem",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est.
          </p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row
        columns="2"
        style={{ borderBottom: "1px solid #cccccc", padding: "2rem 0 3rem " }}
      >
        <Grid.Column width="6">
          <Label
            color={"black"}
            style={{
              borderRadius: "0",
              lineHeight: "1.8rem",
              minWidth: "4rem",
              textAlign: "center",
            }}
          >
            SIZE
          </Label>
          <Select
            placeholder="Size"
            options={size}
            style={{ minWidth: "5rem" }}
            onChange={handleSizeChanged}
            defaultValue="M"
          />
        </Grid.Column>
        <Grid.Column width="7">
          <Label
            color={"black"}
            style={{
              borderRadius: "0",
              lineHeight: "1.8rem",
              minWidth: "4rem",
              textAlign: "center",
            }}
          >
            QUANTITY
          </Label>
          <Select
            name="quantity"
            placeholder="Qty"
            options={quantity}
            style={{ minWidth: "5rem" }}
            onChange={handleQuantityChanged}
            defaultValue="1"
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row
        style={{ borderBottom: "1px solid #cccccc", padding: "2rem 0 3rem " }}
      >
        <Grid.Column>
          <Button
            secondary
            style={{ borderRadius: "0" }}
            onClick={() => addProductToCart()}
          >
            ADD TO CART
          </Button>

          <Icon
            name="heart"
            size="large"
            style={{
              color: "black",
              border: "1px solid #cccccc",
              paddingTop: "9px",
              height: "2.8rem",
              width: "3.5rem",
              marginLeft: "1rem",
            }}
          />

          <Icon
            name="search"
            size="large"
            style={{
              color: "black",
              border: "1px solid #cccccc",
              paddingTop: "9px",
              height: "2.8rem",
              width: "3.5rem",
              marginLeft: "1rem",
            }}
          />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row style={{ padding: "2rem 0 3rem " }}>
        <Grid.Column style={{ display: "flex" }}>
          <Header
            as="h3"
            content={"SHARE: "}
            style={{ margin: "0", marginRight: "1rem" }}
          />
          <Icon
            name="facebook f"
            size="large"
            style={{ marginRight: "1rem", color: "#6e6e6e" }}
          />
          <Icon
            name="twitter"
            size="large"
            style={{ marginRight: "1rem", color: "#6e6e6e" }}
          />
          <Icon
            name="info"
            size="large"
            style={{ marginRight: "1rem", color: "#6e6e6e" }}
          />
          <Icon
            name="google plus g"
            size="large"
            style={{ marginRight: "1rem", color: "#6e6e6e" }}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

const size = [
  { key: "SM", value: "SM", text: "SM" },
  { key: "M", value: "M", text: "M" },
  { key: "L", value: "L", text: "L" },
  { key: "XL", value: "XL", text: "XL" },
];

const quantity = [
  { key: "1", value: "1", text: "1" },
  { key: "2", value: "2", text: "2" },
  { key: "3", value: "3", text: "3" },
  { key: "4", value: "4", text: "4" },
  { key: "5", value: "5", text: "5" },
];

export default connect(null, { addToCart })(SelectedProductDescription);
