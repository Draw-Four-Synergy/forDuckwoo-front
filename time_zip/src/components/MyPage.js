import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/MyPage.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import scrap_img from "../img/scrap.png";

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
            <img className="badge" src={img} alt=""></img>
                <span class="mypage_nickname">{nickName}</span> 
                    <div className="mypage_scrap">
                        <img className="mypage_scrap_img" src={scrap_img} alt=""></img>
                        <Link 
                            to="/scrap" 
                            style={{textDecoration: 'inherit', color: 'inherit'}}
                        >
                            <span>스크랩</span>
                        </Link>
                    </div>                
                <div className="mypage_scrap">
                    <span>단어장</span>
                </div>
            </div>
        </div>
        
    );
};

export default MyPage;