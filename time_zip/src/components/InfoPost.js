import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useLocation } from "react-router";
import "../css/InfoPost.css";

const InfoPost = () => {
  const location = useLocation();
  console.log(location.state.data);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `http://3.36.252.208:9000/posts/detail/${location.state.data}`,
    }).then((response) => {
      if (response.data.isSuccess) {
        setInfo(response.data);
        console.log(response.data);
        console.log("불러오기 성공");
      } else {
        console.log("불러오기 실패");
      }
    });
  }, []);

  return (
    <div className="InfoPost">
      <Navbar />
      <div className="info-post-profile">
        <div className="info-post-user">
          <img
            src={info?.result?.photo}
            alt="프로필"
            width="10%"
            className="profile-Img"
          ></img>
          <div className="info-post-user-nickname">{info?.result?.nick}</div>
        </div>
        <div className="info-post-user-content">{info?.result?.content}</div>
        <hr></hr>
      </div>
    </div>
  );
};

export default InfoPost;
