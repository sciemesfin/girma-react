import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Nav } from "shards-react";

const Footer = ({ contained, copyright }) => (
  <footer className="main-footer d-flex p-2 px-3 bg-white border-top">
    <Container fluid={contained}>
      <Row className="py-3">
        <Nav>Plantenoc Admin Panel</Nav>
        <span className="copyright ml-auto my-auto mr-2">{copyright}</span>
      </Row>
    </Container>
  </footer>
);

Footer.propTypes = {
  /**
   * Whether the content is contained, or not.
   */
  contained: PropTypes.bool,
  /**
   * The menu items array.
   */
  menuItems: PropTypes.array,
  /**
   * The copyright info.
   */
  copyright: PropTypes.string
};
Footer.defaultProps = {
  contained: false,
  copyright: "Copyright © 2021 Tech 1 Factory LLC"
};

export default Footer;
