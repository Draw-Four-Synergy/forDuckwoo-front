import React from "react";
import { Link } from "react-router-dom";
import "../css/Nproduct.css";
import eye from "../img/eye.png";
import scrap from "../img/scrap.png";

function Nproduct({ data, language }) {
  console.log(data, language);
  return (
    <>
      <div className="viewscrap">
        <img src={eye} alt="" width="20px" height="20px"></img>
        <p className="view-count"> {data?.view} </p>
        <img src={scrap} alt="" width="20px" height="20px"></img>
        <p className="view-scrap"> {data?.scrap} </p>
      </div>
      <div className="nproduct">
        <div className="nproduct_info">
          <p>{data?.title}</p>
        </div>
        {language === "kor" && (
          <>
            <button className="kor-view-btn">
              <Link
                to="/news"
                state={{ category: "news", id: data?.id }}
                style={{ textDecoration: "inherit", color: "inherit" }}
              >
                View
              </Link>
            </button>
          </>
        )}
        {language === "eng" && (
          <>
            <button className="kor-view-btn">
              <Link
                to="/english_news"
                state={{ category: "en_news", id: data?.id }}
                style={{ textDecoration: "inherit", color: "inherit" }}
              >
                View
              </Link>
            </button>
          </>
        )}
        {language === "audio" && (
          <>
            <button className="kor-view-btn">
              <Link
                to="/audio"
                state={{ category: "audio", id: data?.id }}
                style={{ textDecoration: "inherit", color: "inherit" }}
              >
                View
              </Link>
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default Nproduct;
