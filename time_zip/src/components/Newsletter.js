import React from "react";
import Navbar from "./Navbar";
import "../css/Newsletter.css";
import Nproduct from "./Nproduct";

function Newsletter() {
  return (
    <>
      <div className="newsletter">
        <Navbar />
        <div className="Newsletter_container">
          <h1> Newsletter </h1>

          <h3>인기순</h3>

          <div className="Newsletter_row">
            <Nproduct />
          </div>

          <h3>최신순</h3>

          <div className="Newsletter_row">
            <Nproduct />
          </div>

          <div className="Newsletter_row">
            <Nproduct />
          </div>

          <div className="Newsletter_row">
            <Nproduct />
          </div>

          <div className="Newsletter_row">
            <Nproduct />
          </div>

          <div className="Newsletter_row">
            <Nproduct />
          </div>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
