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
            url: "http://3.36.252.208:9000/contents/interest/en_news",
        });
        
        if(response.data.isSuccess){
            setNewsArr(response.data);
        }
    };

    const getRecentInfo = async() => {
        const response = await axios({
            method: "get",
            url: "http://3.36.252.208:9000/contents/en_news",
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
            <h1> English Newsletter </h1>

            <h3>Popular</h3>

            <div className="Newsletter_row">
                {/* {newsArr && newsArr.result?.map((el)=><Nproduct data={el}/>)} */}
                {newsArr.result && (
                <>
                    <Nproduct data={newsArr.result[0]} language="eng"/>
                    <Nproduct data={newsArr.result[1]} language="eng"/>
                </>
                )}
            </div>

            <h3>Recent</h3>

            <div className="Newsletter_row">
                {recNewsArr.result && (
                    <>
                    <Nproduct data={recNewsArr.result[0]} language="eng"/>
                    <Nproduct data={recNewsArr.result[1]} language="eng"/>
                    <Nproduct data={recNewsArr.result[2]} language="eng"/>
                    <Nproduct data={recNewsArr.result[3]} language="eng"/>
                    </>
                )}
            </div>
            </div>
        </div>
        </>
    );
}

export default Newsletter;
