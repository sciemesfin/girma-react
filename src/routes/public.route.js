import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthService } from "../services";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        AuthService.isAuthenticated() && restricted ? (
          <Redirect to="/app" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
