import React from "react";
import "../css/Home.css";
import logo from "../img/logo.png";
import mainBack from "../img/mainBackground.png";

const Home = () => {
  return (
    <>
      <div className="Home">
        <img className="homeImg" src={mainBack} alt="배경" />
        <div className="home-top">
          <div className="home-small-text">통학 & 공강 시간 자기계발</div>
          <img className="logoImg" src={logo} alt="로고" />
        </div>
        <div className="home-btn">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>
    </>
  );
};

export default Home;
