import React, { useState, useEffect } from 'react';
import "../css/Englishnews.css";
import smile from "../img/smile.png";
import sad from "../img/sad.png";
import angry from "../img/angry.png";
import scrap from "../img/scrap.png";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import axios from 'axios';


function Audio () {
    /*const audiobook_emo = () => {
        const[item, setItem] = useState(0)
        const incrementItem = () => setItem(item+1)
    }*/
    const jwt = localStorage.getItem('jwt');
    const location = useLocation();
    const category = location.state.category;
    const id = location.state.id;
    console.log(id);
    
    

    let [like, setLike]=useState(0);
    let [emoName, setEmoName] = useState([
        "좋아요", "슬퍼요", "화나요"
    ]);

    const [audio, setAudio] = useState([]);

    const getInfo = async() => {
        const response = await axios.get(`http://3.36.252.208:9000/contents/${category}/${id}`, {
            headers: {
                "x-access-token" : jwt
            }
        });
        console.log(response.data);
        if(response.data.isSuccess === true){
            setAudio(response.data.result);
            
        }
    };

    useEffect(() => {
        getInfo();
    }, []);

    return (
        <div className="englishnews">
            <Navbar />
            <h1>Audiobook</h1>
            <div className="englishnews_title">
                <p>{audio.title}</p>
            </div>

            <div className="englishnews_page">
                <iframe className="audio_content" src={audio.content}></iframe>
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
                <Link to="/audiobook">
                <button className="chart">목록</button>
                </Link>
            </div>
        </div>

    );
};

export default Audio;