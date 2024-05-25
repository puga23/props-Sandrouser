import React from "react";
import Home from "./page/Home";
import About from "./page/About";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <About></About>
    </div>
  );
}

export default App;
