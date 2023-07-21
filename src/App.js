import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function Name() {
  return <h1>Home Page</h1>;
}

function Name2() {
  return <h1>Movie Page</h1>;
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/"  element={<Name/>} />
        <Route path="/movies"  element={<Name2/>} />
      </Routes>
    </>
  );
}

export default App;


