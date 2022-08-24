import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/MyPage.css";


function MyPage({ userObj }){
    const [img, setImg] = useState("");
    const [nickName, setNickName] = useState("");

    const getInfo = async() => {
        const response = await axios.get("http://3.36.252.208:9000/users", {
            headers: {
                "x-access-token": "eyJ0eXBlIjoiand0IiwiYWxnIjoiSFMyNTYifQ.eyJ1c2VySWQiOjgsImlhdCI6MTY2MTM0NDc5OSwiZXhwIjoxNjYyODE2MDI4fQ._88n5pKCZSCuOy3UXdYCbCQw7x3PjmVeWEpxMKqbpo0"
            }
        });
        if(response.data.isSuccess === true){
            setImg(response.data.result.photo);
            setNickName(response.data.result.nickName);
        }
    };

    useEffect(() => {
        getInfo();
    }, []);

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