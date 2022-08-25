import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Splash from "./components/Splash";
import Home from "./components/Home";
import Account from "./components/Account";
import MainCategory from "./components/MainCategory";
import InfoBoard from "./components/InfoBoard";
import Newsletter from "./components/Newsletter";
import InfoWrite from "./components/InfoWrite";
import MyPage from "./components/MyPage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Splash />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/account" element={<Account />}></Route>
          <Route path="/main" element={<MainCategory />}></Route>
          <Route path="/info" element={<InfoBoard />}></Route>
          <Route path="/newsletter" element={<Newsletter />}></Route>
          <Route path="/infowrite" element={<InfoWrite />}></Route>
          <Route path="/my_page" element={<MyPage />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
