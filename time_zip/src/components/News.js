import React, { useState, useEffect } from "react";
import "../css/Englishnews.css";
import smile from "../img/smile.png";
import sad from "../img/sad.png";
import angry from "../img/angry.png";
import scrap from "../img/scrap.png";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import axios from "axios";

function News() {
    /*const audiobook_emo = () => {
            const[item, setItem] = useState(0)
            const incrementItem = () => setItem(item+1)
        }*/
    const jwt = localStorage.getItem("jwt");
    const location = useLocation();
    const category = location.state.category;
    const id = location.state.id;

    const [news, setNews] = useState([]);
    const [emoticon, SetEmoticon] = useState([]);

    const getInfo = async () => {
        const response = await axios.get(
        `http://3.36.252.208:9000/contents/${category}/${id}`,
        {
            headers: {
            "x-access-token": jwt,
            },
        }
        );
        if (response.data.isSuccess === true) {
        setNews(response.data.result);
        }
    };

    const onClick = () => {
        const current = document.getElementById("scrap-btn");
        current.style.backgroundColor = "#FFDD2A";
    };

    useEffect(() => {
        getInfo();
    }, []);

    return (
        <div className="englishnews">
            <Navbar />
            <h1>News</h1>
            <div className="englishnews_title">
                <p>{news.title}</p>
            </div>

            <div className="englishnews_page">
                <iframe className="news_content" src={news.content}></iframe>
            </div>

            <div className="englishnews_emoscrap">
                <span className="englishnews_emo">
                    <div className="englishnews_smile">
                        <img src={smile} alt="smile" width="50px" height="50px"></img>
                        <p className="emoticon-num">{news && news.smile}</p>
                    </div>

                    <div className="englishnews_sad">
                        <img src={sad} alt="sad" width="50px" height="50px"></img>
                        <p className="emoticon-num">{news && news.cry}</p>
                    </div>

                    <div className="englishnews_angry">
                        <img src={angry} alt="angry" width="60px" height="50px"></img>
                        <p className="emoticon-num">{news && news.angry}</p>
                    </div>
                </span>

                <span className="englishnews_scrap">
                    <button className="scrap-btn" id="scrap-btn" onClick={onClick}>
                        <img src={scrap} alt="scrap" width="15%" height="15%"></img>스크랩
                    </button>
                </span>
            </div>

            <div className="englishnews_chart">
                <Link to="/newsletter">
                <button className="chart">목록</button>
                </Link>
            </div>
        </div>
    );
}

export default News;