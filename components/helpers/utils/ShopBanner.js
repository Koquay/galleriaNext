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

const ShopBanner = () => {
  return (
    <Grid stackable style={{ marginTop: "1rem" }}>
      <Image src="/static/img/blog-main-1.jpg" />
    </Grid>
  );
};

export default ShopBanner;
