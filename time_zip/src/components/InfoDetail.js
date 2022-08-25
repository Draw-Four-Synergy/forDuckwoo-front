import React from "react";
import "../css/InfoDetail.css";

const InfoDetail = ({ data }) => {
  console.log(data);

  return (
    <div className="InfoDetail">
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
