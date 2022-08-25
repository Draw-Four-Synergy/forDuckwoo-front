import React, { useState, useEffect } from "react";
import "../css/Englishnews.css";
import smile from "../img/smile.png";
import axios from "axios";
import sad from "../img/sad.png";
import angry from "../img/angry.png";
import scrap from "../img/scrap.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import Navbar from "./Navbar";

function Englishnews() {
  const location = useLocation();

  const [news, setNews] = useState([]);
  const [emoticon, SetEmoticon] = useState([]);

  let [like, setLike] = useState(0);
  //   let [emoName, setEmoName] = useState(["좋아요", "슬퍼요", "화나요"]);

  useEffect(() => {
    axios({
      method: "get",
      url: `http://3.36.252.208:9000/contents/${location.state.category}/${location.state.id}`,
    }).then((response) => {
      if (response.data.isSuccess) {
        setNews(response.data);
        // console.log(response.data);
      } else {
        console.log("상세 영어 기사 불러오기 실패");
      }
    });
  }, []);

  useEffect(() => {
    axios({
      method: "get",
      url: `http://3.36.252.208:9000/contents/emoticon/${location.state.category}/${location.state.id}`,
    }).then((response) => {
      if (response.data.isSuccess) {
        SetEmoticon(response.data.result);
        console.log(response.data.result);
      } else {
        console.log("이모티콘 불러오기 실패");
      }
    });
  }, []);

  const onClick = () => {
    const current = document.getElementById("scrap-btn");
    current.style.backgroundColor = "#FFDD2A";
  };

  return (
    <div className="englishnews">
      <Navbar />
      <h1>Englishnews</h1>
      <div className="englishnews_title">
        <p>{news && news.result?.title}</p>
      </div>

      <div className="englishnews_page">
        <iframe
          className="news_content"
          src={news.result?.content}
          id="englishNews"
          title="news_content"
        ></iframe>
      </div>

      <div className="englishnews_emoscrap">
        <span className="englishnews_emo">
          <div className="englishnews_smile">
            <img src={smile} alt="smile" width="50px" height="50px"></img>
            <p className="emoticon-num">{emoticon && emoticon.smile}</p>
          </div>

          <div className="englishnews_sad">
            <img src={sad} alt="sad" width="50px" height="50px"></img>
            <p className="emoticon-num">{emoticon && emoticon.cry}</p>
          </div>

          <div className="englishnews_angry">
            <img src={angry} alt="angry" width="60px" height="50px"></img>
            <p className="emoticon-num">{emoticon && emoticon.angry}</p>
          </div>
        </span>

        <span className="englishnews_scrap">
          <button className="scrap-btn" id="scrap-btn" onClick={onClick}>
            <img src={scrap} alt="scrap" width="15%" height="15%"></img>스크랩
          </button>
        </span>
      </div>

      <div className="englishnews_chart">
        <button
          className="chart"
          onClick={() => (window.location.href = "/english")}
        >
          목록
        </button>
      </div>
    </div>
  );
}

export default Englishnews;
