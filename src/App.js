import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Styles (Global)
import "slick-carousel/slick/slick.css"; // Update this line
import "slick-carousel/slick/slick-theme.css"; // Update this line

// HOC
import DefaultHOC from "./HOC/DefaultHOC";

// Pages
import HomePage from "./pages/HomePage"

// Layout
import DefaultLayout from "./layouts/DefaultLayout";

function App() {
  return (
    <>
      <Routes>
      <Route DefaultHOC path="/" element={<DefaultLayout><HomePage /></DefaultLayout>} />
      </Routes>
    </>
  );
}

export default App;


