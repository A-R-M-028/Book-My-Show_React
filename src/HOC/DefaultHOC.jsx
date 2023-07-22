import { Route } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";

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
