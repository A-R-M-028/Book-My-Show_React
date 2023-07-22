import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// HOC
import DefaultHOC from "./HOC/DefaultHOC";

// Test
import Temp from "./components/Temp";

// Layout
import DefaultLayout from "./layouts/DefaultLayout";

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


