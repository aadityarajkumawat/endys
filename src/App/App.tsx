import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Home } from "../pages/home/Home";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
