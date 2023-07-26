import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Styles (Global)
import "slick-carousel/slick/slick.css"; // Update this line
import "slick-carousel/slick/slick-theme.css"; // Update this line

// HOC
import DefaultHOC from "./HOC/DefaultHOC";
import MovieHOC from "./HOC/MovieHOC";

// Pages
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";

// Layout
import DefaultLayout from "./layouts/DefaultLayout";
import MovieLayout from "./layouts/MovieLayout";

function App() {
  return (
    <>
      <Routes>
      <Route DefaultHOC path="/" element={<DefaultLayout><HomePage /></DefaultLayout>} />
      <Route MovieHOC path="/movie/:id" element={<MovieLayout><MoviePage /></MovieLayout>} />
      </Routes>
    </>
  );
}

export default App;


