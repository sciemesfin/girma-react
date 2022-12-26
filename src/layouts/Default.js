import React from "react";
import PropTypes from "prop-types";

import { Footer } from "../layouts/public";

const DefaultLayout = ({ children, noNavbar, noFooter }) => (
  <div>
    <div style={{ height: "100vh" }}>{children}</div>
    <Footer />
  </div>
);

DefaultLayout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
};

DefaultLayout.defaultProps = {
  noNavbar: false,
  noFooter: false
};

export default DefaultLayout;
