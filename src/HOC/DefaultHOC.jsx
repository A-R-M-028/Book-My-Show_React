import React from "react";
import { Route } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import Temp from "../components/Temp";

const DefaultHOC = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      element={
        <DefaultLayout>
          <Component />
        </DefaultLayout>
      }
    />
  );
};

export default DefaultHOC;
