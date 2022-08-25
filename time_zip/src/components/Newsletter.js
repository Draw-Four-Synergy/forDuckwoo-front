import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "../css/Newsletter.css";
import Nproduct from "./Nproduct";
import axios from "axios";

function Newsletter() {
  const [newsArr, setNewsArr] = useState([]);
  const [recNewsArr, setRecNewsArr] = useState([]);

  const getInfo = async() => {
    const response = await axios({
        method: "get",
        url: "http://3.36.252.208:9000/contents/interest/news",
    });
    
    if(response.data.isSuccess){
      setNewsArr(response.data);
    }
  };

  const getRecentInfo = async() => {
    const response = await axios({
        method: "get",
        url: "http://3.36.252.208:9000/contents/news",
    });
    
    if(response.data.isSuccess){
      setRecNewsArr(response.data);
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
          <h1> Newsletter </h1>

          <h3>인기순</h3>

          <div className="Newsletter_row">
            {/* {newsArr && newsArr.result?.map((el)=><Nproduct data={el}/>)} */}
            {newsArr.result && (
              <>
                <Nproduct data={newsArr.result[0]} language="kor"/>
                <Nproduct data={newsArr.result[1]} language="kor"/>
              </>
            )}
          </div>

          <h3>최신순</h3>

          <div className="Newsletter_row">
            {recNewsArr.result && (
                <>
                  <Nproduct data={recNewsArr.result[0]} language="kor"/>
                  <Nproduct data={recNewsArr.result[1]} language="kor"/>
                  <Nproduct data={recNewsArr.result[2]} language="kor"/>
                  <Nproduct data={recNewsArr.result[3]} language="kor"/>
                </>
              )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
