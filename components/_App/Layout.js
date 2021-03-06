import Head from "next/head";
import { Container } from "semantic-ui-react";

import HeaderComponent from "./HeaderComponent";
import HeadContent from "./HeadContent";
import Footer from "../helpers/footer/Footer";

function Layout({ children }) {
  return (
    <>
      <Head>
        <HeadContent />
        {/* Stylesheets */}
        <link rel="stylesheet" type="text/css" href="/static/styles.css" />
        <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
        />
        <title>ReactReserve</title>
      </Head>
      <HeaderComponent />
      <Container fluid style={{ paddingTop: "1em" }}>
        {children}
      </Container>
      <Footer />
    </>
  );
}

export default Layout;
