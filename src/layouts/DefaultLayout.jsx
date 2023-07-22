// This is pascal case not camel case
import { Route } from "react-router-dom";
import Navbar from "../components/Navbar/NavbarComonent";


const DefaultLayout = (props) => {
  return (
    <>
      <Navbar/>
      {props.children}
    </>
  );
};

export default DefaultLayout;
