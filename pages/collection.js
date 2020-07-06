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
import { setProduct } from "../components/helpers/product/ProductActions";
import { filterCollection } from "../components/helpers/collection/CollectionActions";
import ShopBanner from "../components/helpers/utils/ShopBanner";
import CollectionSidebar from "../components/helpers/collection/collectionSidebar";

const collection = ({ filterCollection, products, collection, setProduct }) => {
  const router = useRouter();

  console.log("products", products);
  useEffect(() => {
    console.log("router.query", router.query);
    router.query && filterCollection(collection);
  }, []);

  const toFixed = (value) => {
    return Number.parseFloat(value).toFixed(0);
  };

  const handleClick = (productId) => {
    console.log("productId", productId);
    setProduct(productId);
  };

  return (
    <Container style={{ marginTop: "3rem" }}>
      <ShopBanner />
      <Grid stackable style={{ marginTop: "3rem" }}>
        <Grid.Row columns="2">
          <Grid.Column width="3">
            <CollectionSidebar />
          </Grid.Column>
          <Grid.Column width="13">
            <Grid stackable>
              <Grid.Row columns="4">
                {products.length &&
                  products.map((product) => (
                    <Grid.Column
                      key={product._id}
                      style={{ marginBottom: "2rem" }}
                    >
                      <Link href={`/selectedProduct?productId=${product._id}`}>
                        <a onClick={() => handleClick(product._id)}>
                          <Card style={{ borderRadius: "0" }}>
                            <Image
                              src={`/static/img/${product.images[0]}`}
                              label={{
                                as: "a",
                                color: "red",
                                content: "SALE",
                                ribbon: true,
                              }}
                            />
                            <Card.Description style={{ padding: ".5rem" }}>
                              <Header
                                as="h5"
                                content={product.name}
                                style={{
                                  textTransform: "capitalize",
                                  marginBottom: "0",
                                }}
                              />
                              <span
                                style={{
                                  marginRight: "1rem",
                                  textDecoration: "line-through",
                                }}
                              >
                                ${toFixed(product.list_price)}
                              </span>
                              <span
                                style={{ fontWeight: "800", color: "#ff5555" }}
                              >
                                ${toFixed(product.price)}
                              </span>
                              <Grid.Row>
                                <Rating rating={product.rating} maxRating={5} />
                              </Grid.Row>
                            </Card.Description>
                          </Card>
                        </a>
                      </Link>
                    </Grid.Column>
                  ))}
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

const mapStateToState = (state) => ({
  products: state.product.products,
  collection: state.collection,
});

export default connect(mapStateToState, { setProduct, filterCollection })(
  collection
);
