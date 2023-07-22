// This is pascal case not camel case
import { Route } from "react-router-dom";


const DefaultLayout = (props) => {
  return (
    <>
      <h1 className="text-xl">DefaultLayout Page</h1>
      {props.children}
    </>
  );
};

export default DefaultLayout;
