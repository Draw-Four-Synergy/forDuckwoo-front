import React, { useState } from "react";
import axios from "axios";

function LogIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const onChange = (event) => {
        const {target: {name, value}} = event;
        if(name === "email"){
            setEmail(value);
        } else if(name === "password"){
            setPassword(value);
        }
    };

    const connectAccount = async() => {
        const response = await axios({
            method: "post",
            url: "http://3.36.252.208:9000/auth/login",
            data: {
                email: email,
                pwd: password,
            },
        });
        setError(response.data.message);
    };

    const onSubmit = async(event) => {
        event.preventDefault();
        connectAccount();
    };

    return (
        <form onSubmit={onSubmit} className="accountForm">
            <input 
                name="email" 
                type="email" 
                placeholder="Email" 
                required 
                value={email}
                onChange={onChange}
                className="formInput"
            />
            <input 
                name="password" 
                type="password" 
                placeholder="Password" 
                required 
                value={password}
                onChange={onChange}
                className="formInput" 
            />        
            <hr />
            <input 
                type="submit" 
                value={"로그인"}
                className="formBtn"
            />
            {error !== "" && <h5 className="errorMessage">{error}</h5>}
        </form>
    );
};

export default LogIn;