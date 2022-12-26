import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import routes from "./routes/routes";
import withTracker from "./withTracker";

import PublicRoute from "./routes/public.route";
import PrivateRoute from "./routes/private.route";

export default () => (
  <Router basename={process.env.REACT_APP_BASENAME || ""}>
    <div>
      <ToastContainer />
      {routes.map((route, index) => {
        return (
          <Switch>
            {route.restricted || route.restricted === false ? (
              <PublicRoute
                key={index}
                path={route.path}
                exact={route.exact}
                restricted={route.restricted}
                component={withTracker(props => {
                  return (
                    <route.layout {...props}>
                      <route.component {...props} />
                    </route.layout>
                  );
                })}
              />
            ) : (
              <PrivateRoute
                key={index}
                path={route.path}
                exact={route.exact}
                component={withTracker(props => {
                  return (
                    <route.layout {...props}>
                      <route.component {...props} />
                    </route.layout>
                  );
                })}
              />
            )}
          </Switch>
        );
      })}
    </div>
  </Router>
);
