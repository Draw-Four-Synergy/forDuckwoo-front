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
import Englishnews from "./components/Englishnews";
import English from "./components/English";
import News from "./components/News";
import Scrap from "./components/Scrap";
import InfoPost from "./components/InfoPost";
import Audiobook from "./components/Audiobook";
import Audio from "./components/Audio";

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
          <Route path="/english_news" element={<Englishnews />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/english" element={<English />}></Route>
          <Route path="/scrap" element={<Scrap />}></Route>
          <Route path="/infopost" element={<InfoPost />}></Route>
          <Route path="/audiobook" element={<Audiobook />}></Route>
          <Route path="/audio" element={<Audio />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
