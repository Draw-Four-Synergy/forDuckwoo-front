import React from "react";
import {Link} from "react-router-dom";
import Navbar from "./Navbar";
import "../css/MainCategory.css";
import { useLocation } from "react-router-dom";

const MainCategory = () => {
  const location = useLocation();
  const jwt = location.state.jwt;

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
          <button id="main-btn2">
            English
            <br />
            Article
          </button>
          <button id="main-btn3">
            <Link 
              to="/my_page" 
              style={{ color: 'inherit', textDecoration: 'inherit' }}
              state={{ jwt : jwt }}>
              My Page
            </Link>
          </button>
          <button id="main-btn4">Audio Book</button>
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
