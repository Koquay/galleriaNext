import React from "react";
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
} from "semantic-ui-react";
import Link from "next/link";

const HeaderBottom = () => {
  return (
    <Menu
      style={{
        borderTop: "none",
        borderLeft: "none",
        borderRight: "none",
        boxShadow: "none",
        justifyContent: "center",
        marginTop: "0",
      }}
    >
      <Menu.Menu>
        <Link href="/">
          <Menu.Item header>
            <Header as="h4" content="HOME" />
          </Menu.Item>
        </Link>
        <Link href="/">
          <Menu.Item header>
            <Header as="h4" content="ABOUT" />
          </Menu.Item>
        </Link>
        <Link href="/">
          <Menu.Item header>
            <Header as="h4" content="BLOG" />
          </Menu.Item>
        </Link>
        <Link href="/">
          <Menu.Item header>
            <Header as="h4" content="SHOP" />
          </Menu.Item>
        </Link>
        <Link href="/">
          <Menu.Item header>
            <Header as="h4" content="MEN'S" />
          </Menu.Item>
        </Link>
        <Link href="/">
          <Menu.Item header>
            <Header as="h4" content="WOMEN'S" />
          </Menu.Item>
        </Link>
        <Link href="/">
          <Menu.Item header>
            <Header as="h4" content="ACCESSORIES" />
          </Menu.Item>
        </Link>
        <Link href="/">
          <Menu.Item header>
            <Header as="h4" content="PAGES" />
          </Menu.Item>
        </Link>
        <Link href="/">
          <Menu.Item header>
            <Header as="h4" content="CONTACT" />
          </Menu.Item>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};

export default HeaderBottom;
