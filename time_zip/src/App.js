import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Splash from "./components/Splash";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Splash />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
