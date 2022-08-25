import React from "react";
import "../css/CommentDetail.css";

const CommentDetail = ({ data }) => {
  //   console.log(data);

  return (
    <div className="CommentDetail">
      <div className="comment-profile">
        <div className="comment-user">
          <img
            src={data?.photo}
            alt="프로필"
            width="8%"
            className="profile-commentImg"
          ></img>
          <div className="comment-user-nickname">{data?.nick}</div>
        </div>
        <div className="comment-user-comment">{data?.comment}</div>
        <hr></hr>
      </div>
    </div>
  );
};

export default CommentDetail;
