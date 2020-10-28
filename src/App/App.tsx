import React from "react";
import Navbar from "../components/navbar/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Routes } from "../Routes/Routes";
import LoginPopup from "../components/login/LoginPopup";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <LoginPopup />
        <Switch>
          <Routes />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
