import { connect } from "react-redux";

import FooterSubscription from "./FooterSubscription";
import FooterInfo from "./FooterInfo";

const Footer = ({ footer }) => {
  console.log("footer", footer);
  const { info, subscription } = footer;
  return (
    <>
      <FooterSubscription subscription={subscription} />
      <FooterInfo info={info} />
    </>
  );
};

const mapStateToProps = (state) => ({
  footer: state.footer,
});

export default connect(mapStateToProps)(Footer);
