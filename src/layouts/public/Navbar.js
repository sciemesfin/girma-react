import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  Button
} from "shards-react";
import { NavLink as RouteNavLink } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";

export default class CustomNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      dropdownOpen: false,
      collapseOpen: false
    };
  }

  toggleDropdown() {
    this.setState({
      ...this.state,
      ...{
        dropdownOpen: !this.state.dropdownOpen
      }
    });
  }

  toggleNavbar() {
    this.setState({
      ...this.state,
      ...{
        collapseOpen: !this.state.collapseOpen
      }
    });
  }

  render() {
    return (
      <>
        <div className="d-block d-md-none">
          <MobileNavbar />
        </div>
        <Navbar
          type="dark"
          theme="success"
          expand="md"
          className="my-toolbar d-none d-md-flex"
        >
          <NavbarBrand tag={RouteNavLink} to={"/"}>
            <div
              className="d-flex m-auto"
              style={{
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <img
                id="main-logo"
                className="d-inline-block align-top mr-1"
                style={{ maxWidth: "100%", maxHeight: 50 }}
                src={require("../../assets/images/logo.jpeg")}
                alt="Logo"
              />
            </div>
          </NavbarBrand>

          <Collapse open={this.state.collapseOpen} navbar>
            <Nav navbar className="ml-auto">
              <NavItem>
                <NavLink active tag={RouteNavLink} to={"/loan-list"}>
                  Available Loan
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink active href="#">
                  Resources
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink active href="#">
                  Quick Referal
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink active tag={RouteNavLink} to={"/signup"}>
                  Sign up
                </NavLink>
              </NavItem>
              <NavItem>
                <Button squared theme="dark" tag={RouteNavLink} to={"/signin"}>
                  Sign In
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>{" "}
      </>
    );
  }
}
