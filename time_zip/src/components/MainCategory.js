import React from "react";
import Navbar from "./Navbar";
import "../css/MainCategory.css";

const MainCategory = () => {
  return (
    <div className="MainCategory">
      <Navbar />
      <div className="main-category">
        <div className="main-btn">
          <button
            id="main-btn1"
            onClick={() => (window.location.href = "/newsletter")}
          >
            News
            <br />
            Letters
          </button>
          <button 
            id="main-btn2"
            onClick={() => (window.location.href = "/english")}
          >
            English
            <br />
            Article
          </button>
          <button
            id="main-btn3"
            onClick={() => (window.location.href = "/my_page")}
          >
            My Page
          </button>
          <button
           id="main-btn4"
           onClick={() => (window.location.href = "/audiobook")}
          >
            Audio Book
          </button>
          <button
            id="main-btn5"
            onClick={() => (window.location.href = "/info")}
          >
            Info Board
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainCategory;
