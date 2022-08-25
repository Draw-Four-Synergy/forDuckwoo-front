import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/MyPage.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import scrap_img from "../img/scrap.png";
import english_img from "../img/english.png";
import b1 from "../img/덕새1.png";
import b2 from "../img/덕새2.png";
import b3 from "../img/덕새3_흑백.png";
import b4 from "../img/덕새4_흑백.png";


function MyPage({ userObj }){
    const [img, setImg] = useState("");
    const [nickName, setNickName] = useState("");
    const jwt = localStorage.getItem('jwt');

    const getInfo = async() => {
        const response = await axios.get("http://3.36.252.208:9000/users", {
            headers: {
                "x-access-token" : jwt
            }
        });
        if(response.data.isSuccess === true){
            setImg(response.data.result.photo);
            setNickName(response.data.result.nickName);
        }
    };

    useEffect(() => {
        getInfo();
    });

    return (
        <div className="mypage_content">
            <div className="mypage_container">
                <Navbar />
                <img className="profile_img" src={img} alt=""></img>
                <span class="mypage_nickname">{nickName}</span> 
                <div className="badge_container">
                    <img className="badge" src={b1} alt=""></img>
                    <img className="badge" src={b2} alt=""></img>
                    <img className="badge" src={b3} alt=""></img>
                    <img className="badge" src={b4} alt=""></img>
                </div>
                
                <div className="mypage_scrap">
                    <img className="mypage_img" src={scrap_img} alt=""></img>
                    <Link 
                        to="/scrap" 
                        style={{textDecoration: 'inherit', color: 'inherit'}}
                    >
                        <span>스크랩</span>
                    </Link>
                </div>                
                <div className="mypage_scrap">
                <img className="mypage_img" src={english_img} alt=""></img>
                    <Link 
                        to="/english_words" 
                        style={{textDecoration: 'inherit', color: 'inherit'}}
                    >
                        <span>영단어</span>
                    </Link>
                </div>
            </div>
        </div>
        
    );
};

export default MyPage;