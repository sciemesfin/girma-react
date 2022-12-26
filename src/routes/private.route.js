import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthService } from "../services";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        AuthService.isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signin" />
        )
      }
    />
  );
};

export default PrivateRoute;
