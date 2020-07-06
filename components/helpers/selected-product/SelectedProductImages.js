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
} from "semantic-ui-react";
import Link from "next/link";

const SelectedProductImages = ({ product }) => {
  console.log("product", product);
  const [displayedImage, setDisplayedImage] = useState("");

  useEffect(() => {
    product && setDisplayedImage(product.images[0]);
  }, []);

  return (
    <Grid stackable>
      <Grid.Row>
        <Grid.Column>
          <Image src={`/static/img/${displayedImage}`} size="massive" />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <List
            horizontal
            style={{ display: "flex", justifyContent: "center" }}
          >
            {product.images.map((image) => (
              <List.Item onClick={() => setDisplayedImage(image)}>
                <Image src={`/static/img/${image}`} style={{ width: "6rem" }} />
              </List.Item>
            ))}
          </List>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default SelectedProductImages;
