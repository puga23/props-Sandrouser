import React from "react";
import Button from "./components/Button";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Button color="btn">click</Button>
      <Button color="btn1">on</Button>
      <Button color="btn2">me</Button>
      <Button color="btn3">!</Button>
      <Home lc="pink">red</Home>
    </div>
  );
}

export default App;
