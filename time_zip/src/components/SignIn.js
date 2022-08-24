import React, { useState } from "react";

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [id, setId] = useState("");

    const onChange = (event) => {
        const {target: {name, value}} = event;
        if(name === "email"){
            setEmail(value);
        } else if(name === "password"){
            setPassword(value);
        } else if(name === "id"){
            setId(value);
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
            <input 
                name="id" 
                type="text" 
                placeholder="ID" 
                required 
                value={id}
                onChange={onChange}
                className="formInput" 
            />
            <hr />
            <input 
                type="submit" 
                value={"계정 생성"}
                className="formBtn"
            />
        </form>
    )
};

export default SignIn;