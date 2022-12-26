import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import MainNavbar from "../layouts/private/MainNavbar/MainNavbar";
import MainSidebar from "../layouts/private/MainSidebar/MainSidebar";
import MainFooter from "../layouts/private/Footer";

const SecondaryLayout = ({ children, noNavbar, noFooter }) => (
  <Container fluid>
    <Row>
      <MainSidebar />
      <Col
        className="main-content p-0"
        lg={{ size: 10, offset: 2 }}
        md={{ size: 9, offset: 3 }}
        sm="12"
        tag="main"
      >
        {!noNavbar && <MainNavbar />}
        <div style={{ minHeight: "100vh", height: "100%" }}>{children}</div>
        {!noFooter && <MainFooter />}
      </Col>
    </Row>
  </Container>
);

SecondaryLayout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
};

SecondaryLayout.defaultProps = {
  noNavbar: false,
  noFooter: false
};

export default SecondaryLayout;
