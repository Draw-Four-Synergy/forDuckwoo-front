import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import axios from "axios";
import Navbar from "./Navbar";
import "../css/InfoWrite.css";

const InfoWrite = () => {
  const [item, setItem] = useState(null);
  const navigate = useNavigate();

  const submit = async (values) => {
    const value = values || {};

    await axios({
      method: "post",
      url: `http://3.36.252.208:9000/posts`,
      data: {
        content: value.content,
        hashtag: item,
      },
      headers: {
        "x-access-token":
          "eyJ0eXBlIjoiand0IiwiYWxnIjoiSFMyNTYifQ.eyJ1c2VySWQiOjcsImlhdCI6MTY2MTMxMjMxNSwiZXhwIjoxNjYyNzgzNTQ0fQ.TwTrAJgn_3cE7ir2Jem7au9N1cfAUZTNmZKFb9lHqq8",
      },
    }).then((response) => {
      if (response.data.isSuccess) {
        console.log(response.data);
        console.log("작성 성공");
        navigate("/info");
      } else {
        console.log(item);
        console.log("작성 실패");
      }
    });
  };

  const onClick = (props) => {
    setItem(props);

    for (var i = 1; i < 5; i++) {
      if (props === i) {
        document.getElementById(`tag-btn${i}`).style.backgroundColor =
          "#CE4D4D";
      } else {
        document.getElementById(`tag-btn${i}`).style.backgroundColor =
          "#DA8686";
      }
    }
  };

  return (
    <div className="InfoWrite">
      <Navbar />
      <div className="info-containter">
        <Formik
          initialValues={{ content: "", tags: 1 }}
          onSubmit={(data, { setSubmitting }) => {
            setSubmitting(true);
            submit(data);
            setSubmitting(false);
          }}
        >
          {({ values, handleSubmit, handleChange, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <div className="info-write-wrapper">
                <div className="info-write-content">CONTENT</div>
                <textarea
                  id="info-input-content"
                  name="content"
                  type="text"
                  placeholder="내용을 입력해주세요."
                  value={values.content}
                  onChange={handleChange}
                ></textarea>
                <div className="info-write-tags">Tags</div>
                <div className="tags-btn-wrap">
                  <button
                    id="tag-btn1"
                    onClick={() => {
                      onClick(1);
                    }}
                  >
                    #셔틀
                  </button>
                  <button
                    id="tag-btn2"
                    onClick={() => {
                      onClick(2);
                    }}
                  >
                    #날씨
                  </button>
                  <button
                    id="tag-btn3"
                    onClick={() => {
                      onClick(3);
                    }}
                  >
                    #대중교통
                  </button>
                  <button
                    id="tag-btn4"
                    onClick={() => {
                      onClick(4);
                    }}
                  >
                    #기타
                  </button>
                  <div className="bottom-btn-wrap">
                    <button
                      className="post-btn"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      POST
                    </button>
                    <button
                      className="cancel-btn"
                      onClick={() => (window.location.href = "/info")}
                    >
                      CANCEL
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default InfoWrite;
