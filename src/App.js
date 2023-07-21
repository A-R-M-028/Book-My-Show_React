import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// HOC
import DefaultHOC from "./HOC/DefaultHOC";

// Test
import Temp from "./components/Temp";

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
        {/* <Route path="/"  element={<Name/>} />
        <Route path="/movies"  element={<Name2/>} /> */}
        <Route DefaultHOC path="/" component={Temp}/>
      </Routes>
    </>
  );
}

export default App;


