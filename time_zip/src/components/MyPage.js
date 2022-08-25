import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/MyPage.css";
import { useLocation } from "react-router-dom";


function MyPage({ userObj }){
    const [img, setImg] = useState("");
    const [nickName, setNickName] = useState("");
    const location = useLocation();
    const jwt = location.state.jwt;

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
            <img className="badge" src={img} alt=""></img>
                <span class="mypage_nickname">{nickName}</span>
                <div className="mypage_scrap">
                    스크랩
                </div>
                <div className="mypage_scrap">
                    단어장
                </div>
            </div>
        </div>
        
    );
};

export default MyPage;