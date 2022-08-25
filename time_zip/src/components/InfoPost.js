import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useLocation } from "react-router";
import CommentDetail from "./CommentDetail";
import "../css/InfoPost.css";

const InfoPost = () => {
  const location = useLocation();
  const [info, setInfo] = useState([]);
  const [comment, setComment] = useState([]);
  const [key, setKey] = useState(0);

  const [writtenComment, setwrittenComment] = useState([]);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    axios({
      method: "get",
      url: `http://3.36.252.208:9000/posts/detail/${location.state.data}`,
    }).then((response) => {
      if (response.data.isSuccess) {
        setInfo(response.data);
      } else {
        console.log("상세 글 불러오기 실패");
      }
    });
  }, []);

  useEffect(() => {
    axios({
      method: "get",
      url: `http://3.36.252.208:9000/posts/comment/${location.state.data}`,
    }).then((response) => {
      if (response.data.isSuccess) {
        setComment(response.data);
      } else {
        console.log("불러오기 실패");
      }
    });
  }, []);

  const submit = async () => {
    setKey(key + 1);

    await axios({
      method: "post",
      url: `http://3.36.252.208:9000/posts/comment/${location.state.data}`,
      data: {
        comment: writtenComment,
      },
      headers: {
        "x-access-token":
          "eyJ0eXBlIjoiand0IiwiYWxnIjoiSFMyNTYifQ.eyJ1c2VySWQiOjcsImlhdCI6MTY2MTMxMjMxNSwiZXhwIjoxNjYyNzgzNTQ0fQ.TwTrAJgn_3cE7ir2Jem7au9N1cfAUZTNmZKFb9lHqq8",
      },
    }).then((response) => {
      if (response.data.isSuccess) {
        window.location.reload();
      } else {
        console.log("댓글 작성 실패");
      }
    });
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      submit();
    }
  };

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
        <button
          className="info-back-button"
          onClick={() => (window.location.href = "/info")}
        >
          목록으로 돌아가기
        </button>
        <hr></hr>
      </div>
      {/* 댓글 조회 */}
      {comment && comment.result?.map((el) => <CommentDetail data={el} />)}
      {/* 댓글 작성 */}
      <input
        className="inputComment"
        type="text"
        key={key}
        placeholder="댓글을 입력해주세요."
        onChange={(e) => {
          setwrittenComment(e.target.value);
        }}
        onKeyUp={(e) => {
          e.target.value.length > 0 ? setIsValid(true) : setIsValid(false);
        }}
        value={writtenComment}
      ></input>
      <button
        className="commentBtn"
        type="submit"
        disabled={isValid ? false : true}
        onClick={submit}
        onKeyPress={onKeyPress}
      >
        등록
      </button>
    </div>
  );
};

export default InfoPost;
