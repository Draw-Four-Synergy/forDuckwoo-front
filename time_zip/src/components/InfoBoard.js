import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../css/InfoBoard.css";
import axios from "axios";
import writeBtn from "../img/write.png";
import InfoDetail from "./InfoDetail";

const InfoBoard = () => {
  const [item, setItem] = useState(0);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `http://3.36.252.208:9000/posts/${item}`,
    }).then((response) => {
      if (response.data.isSuccess) {
        setInfo(response.data);
        console.log(response.data);
        console.log("불러오기 성공");
      } else {
        console.log("불러오기 실패");
      }
    });
  }, [item]);

  const onClick = (props) => {
    setItem(props);

    for (var i = 0; i < 5; i++) {
      if (props === i) {
        document.getElementById(`info-btn${i}`).style.backgroundColor =
          "#CE4D4D";
      } else {
        document.getElementById(`info-btn${i}`).style.backgroundColor =
          "#DA8686";
      }
    }
  };

  return (
    <div className="InfoBoard">
      <Navbar />
      <div className="info-btn-wrap">
        <button
          id="info-btn0"
          onClick={() => {
            onClick(0);
          }}
        >
          #전체
        </button>
        <button
          id="info-btn1"
          onClick={() => {
            onClick(1);
          }}
        >
          #셔틀
        </button>
        <button
          id="info-btn2"
          onClick={() => {
            onClick(2);
          }}
        >
          #날씨
        </button>
        <button
          id="info-btn3"
          onClick={() => {
            onClick(3);
          }}
        >
          #대중교통
        </button>
        <button
          id="info-btn4"
          onClick={() => {
            onClick(4);
          }}
        >
          #기타
        </button>
        <img
          className="writebtn"
          src={writeBtn}
          alt="글쓰기"
          onClick={() => (window.location.href = "/infowrite")}
        ></img>
        <div className="all-info-board">
          {info && info.result?.map((el) => <InfoDetail data={el} />)}
        </div>
      </div>
    </div>
  );
};

export default InfoBoard;
