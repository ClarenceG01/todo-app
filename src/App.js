import React, { useState, useEffect } from "react";
import "./App.css";
import Todos from "./components/todos";

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <Todos />
    </div>
  );
}

export default App;
