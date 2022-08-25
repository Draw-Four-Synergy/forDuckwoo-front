import React from "react";
import "../css/InfoDetail.css";
import { useNavigate } from "react-router-dom";

const InfoDetail = ({ data }) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/infopost", {
      state: { data: data.community_id },
    });
  };

  return (
    <div className="InfoDetail" onClick={onClick}>
      <div className="info-profile">
        <div className="info-user">
          <img
            src={data.photo}
            alt="프로필"
            width="10%"
            className="profileImg"
          ></img>
          <div className="info-user-nickname">{data.nick}</div>
        </div>
        <div className="info-user-content">{data.content}</div>
        <hr></hr>
      </div>
    </div>
  );
};

export default InfoDetail;
