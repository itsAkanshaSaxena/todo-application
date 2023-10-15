import React from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({
  component: Component,
  spinnerState,
  ToggleSpinnerState,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        console.log(
          "here",
          JSON.parse(localStorage.getItem("isAuthenticated"))
        );
        if (JSON.parse(localStorage.getItem("isAuthenticated"))) {
          return (
            <Component
              {...props}
              spinnerState={spinnerState}
              ToggleSpinnerState={ToggleSpinnerState}
            />
          );
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
