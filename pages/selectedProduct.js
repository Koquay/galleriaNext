import React, { useEffect } from "react";
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
} from "semantic-ui-react";
import Link from "next/link";

import ShopBanner from "../components/helpers/utils/ShopBanner";
import SelectedProductImages from "../components/helpers/selected-product/SelectedProductImages";
import SelectedProductDescription from "../components/helpers/selected-product/SelectedProductDescription";

const selectedProduct = ({ product }) => {
  return (
    <Container style={{ marginTop: "2rem" }}>
      <ShopBanner />
      <Grid stackable style={{ marginTop: "2rem" }}>
        <Grid.Row columns="2">
          <Grid.Column width="6">
            <SelectedProductImages product={product} />
          </Grid.Column>
          <Grid.Column width="10">
            <SelectedProductDescription product={product} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  product: state.product.product,
});

export default connect(mapStateToProps)(selectedProduct);
