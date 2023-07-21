import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// HOC
import DefaultHOC from "./HOC/DefaultHOC";

// Test
import Temp from "./components/Temp";

// Layout
import DefaultLayout from "./layouts/DefaultLayout";

// function Name() {
//   return <h1>Home Page</h1>;
// }

// function Name2() {
//   return <h1>Movie Page</h1>;
// }

function App() {
  return (
    <>
      <Routes>
      <Route DefaultHOC path="/" element={<DefaultLayout><Temp /></DefaultLayout>} />
      </Routes>
    </>
  );
}

export default App;


