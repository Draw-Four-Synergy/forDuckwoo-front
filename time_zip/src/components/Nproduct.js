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
        <img src={eye} alt="" width="20" height="20"></img>
        <p> {data?.view} </p>
        <img src={scrap} alt="" width="20" height="20"></img>
        <p> {data?.scrap} </p>
      </div>
      <div className="nproduct">
        <div className="nproduct_info">
          <p>{data?.title}</p>
        </div>
        {language === "kor" && (
          <>
            <button>
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
            <button>
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
            {language === "audio" && 
                <>
                    <button>
                        <Link 
                            to="/audio" 
                            state={{category:"audio", id:data?.id}} 
                            style={{textDecoration: 'inherit', color: 'inherit'}}>
                            View
                        </Link>
                    </button>
                </>
            }
      </div>
    </>
  );
}

export default Nproduct;
