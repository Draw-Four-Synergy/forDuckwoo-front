import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "../css/Englishnews.css";
import Nproduct from "./Nproduct";
import axios from "axios";

function Audiobook() {
  const [newsArr, setAudioArr] = useState([]);
  const [recNewsArr, setRecAudioArr] = useState([]);

  const getInfo = async () => {
    const response = await axios({
      method: "get",
      url: "http://3.36.252.208:9000/contents/interest/audio",
    });

    if (response.data.isSuccess) {
      setAudioArr(response.data);
    }
  };

  const getRecentInfo = async () => {
    const response = await axios({
      method: "get",
      url: "http://3.36.252.208:9000/contents/audio",
    });

    if (response.data.isSuccess) {
      setRecAudioArr(response.data);
    }
  };

  useEffect(() => {
    getInfo();
    getRecentInfo();
  }, []);

  return (
    <>
      <div className="newsletter">
        <div className="Newsletter_container">
          <Navbar />
          <h1> Audiobook </h1>

          <h3 className="sort_title">인기순</h3>

          <div className="Newsletter_row">
            {newsArr.result && (
              <>
                <Nproduct data={newsArr.result[0]} language="audio" />
                <Nproduct data={newsArr.result[1]} language="audio" />
              </>
            )}
          </div>

          <h3 className="sort_title">최신순</h3>

          <div className="Newsletter_row">
            {recNewsArr.result && (
              <>
                <Nproduct data={recNewsArr.result[0]} language="audio" />
                <Nproduct data={recNewsArr.result[1]} language="audio" />
                <Nproduct data={recNewsArr.result[2]} language="audio" />
                <Nproduct data={recNewsArr.result[3]} language="audio" />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Audiobook;
