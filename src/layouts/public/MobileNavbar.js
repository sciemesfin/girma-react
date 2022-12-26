import React from "react";
import { Button } from "shards-react";
import { NavLink as RouteNavLink } from "react-router-dom";

export default function MobileNavbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#17c671",
        padding: 10
      }}
    >
      <div tag={RouteNavLink} to={"/"}>
        <img
          id="main-logo"
          className="d-inline-block align-top mr-1"
          style={{ maxWidth: "100%", maxHeight: 35 }}
          src={require("../../assets/images/logo.jpeg")}
          alt="Item-Request"
        />
      </div>
      <div>
        {" "}
        <Button squared theme="success" tag={RouteNavLink} to={"/signup"}>
          Sign Up
        </Button>
      </div>
      <div>
        {" "}
        <Button squared theme="dark" tag={RouteNavLink} to={"/signin"}>
          Sign In
        </Button>
      </div>
    </div>
  );
}
