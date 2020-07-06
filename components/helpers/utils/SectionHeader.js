import { Header } from "semantic-ui-react";

const SectionHeader = ({ header }) => {
  return (
    <Header
      as="h3"
      content={header}
      style={{
        backgroundColor: "#ff5555",
        color: "white",
        padding: ".7rem 2rem",
        minWidth: "11rem",
        maxWidth: "13rem",
      }}
    />
  );
};

export default SectionHeader;
