import React, { useState } from "react";

function LogIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChange = (event) => {
        const {target: {name, value}} = event;
        if(name === "email"){
            setEmail(value);
        } else if(name === "password"){
            setPassword(value);
        }
    };

    const onSubmit = async(event) => {
        event.preventDefault();

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
        </form>
    );
};

export default LogIn;