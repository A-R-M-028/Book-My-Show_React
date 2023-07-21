// Adding additional functionalities to the existing components
// This is pascal case not camel case
import { Route } from "react-router-dom";
// Layouts
import DefaultLayout from "../layouts/DefaultLayout";

const DefaultHOC = ({ component: Component, ...rest }) => {
  // Component
  // Props  -> Path and exact
  return (
    <>
      <Route
        {...rest} // Optional
        component={(props) => (
          <DefaultLayout>
            <Component {...props} />
          </DefaultLayout>
        )}
      />
    </>
  );
};

export default DefaultHOC;
