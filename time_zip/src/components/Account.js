import React, { useState } from "react";
import LogIn from "./LogIn";
import SignIn from "./SignIn";
import "../css/Account.css";
import logo from "../img/logo.png"

function Account () {
    const [isNew, setIsNew] = useState(true);
    const [btnName, setBtnName] = useState("로그인하기");

    const onClick = (event) => {
        console.log(btnName, isNew);
        if(btnName === "로그인하기"){
            setIsNew(false);
            setBtnName("가입하기");
        }else if (btnName === "가입하기"){
            setIsNew(true);
            setBtnName("로그인하기");
        }
    };

    return (
        <div className="content">
            <div className="container">
                <img src={logo}></img>
                {isNew ? <SignIn/> : <LogIn/>}
                <span className="textLink" onClick={onClick}>{btnName}</span>
            </div> 
        </div>
    );
};

export default Account;