import React, {useState} from 'react';
import "../css/Englishnews.css";
import smile from "../img/smile.png";
import sad from "../img/sad.png";
import angry from "../img/angry.png";
import scrap from "../img/scrap.png";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";


function Englishnews () {
    /*const audiobook_emo = () => {
        const[item, setItem] = useState(0)
        const incrementItem = () => setItem(item+1)
    }*/

    let [like, setLike]=useState(0);
    let [emoName, setEmoName] = useState([
        "좋아요", "슬퍼요", "화나요"
    ]);

    return (
        <div className="englishnews">
            <Navbar />
            <h1>Englishnews</h1>
            <div className="englishnews_title">
                <p>제목</p>
            </div>

            <div className="englishnews_page">
                <iframe src="https://www.youtube.com/watch?v=F4k89y-k6qU"></iframe>
            </div>

            <div className="englishnews_emoscrap">
            <span className="englishnews_emo">
                
            <span className="englishnews_smile"> <img src={smile} alt="smile" width="30" height="30"></img><p>좋아요</p>
            <span onClick={() => {setLike(like + 1); }}>좋아요</span>{like} </span>

            <span className="englishnews_sad"> <img src={sad} alt="sad" width="30" height="30"></img><p>슬퍼요</p> 
            <span onClick={() => {setLike(like + 1); }}>슬퍼요</span>{like} </span>

            <span className="englishnews_angry"> <img src={angry} alt="angry" width="30" height="30"></img><p>화나요</p> 
            <span onClick={() => {setLike(like + 1); }}>화나요</span>{like} </span>

            </span>

            <span className="englishnews_scrap">
                <img src={scrap} alt="scrap" width="30" height="30"></img><p>스크랩</p>
                <p>스크랩</p>

            </span>
            </div>
            
            <div className="englishnews_chart">
                <Link to="/english">
                <button className="chart">목록</button>
                </Link>
            </div>
        </div>

    );
};

export default Englishnews;