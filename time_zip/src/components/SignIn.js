import React, { useState } from "react";
import axios from "axios";

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [id, setId] = useState("");
    const [error, setError] = useState("");

    const makeAccount = async () => {
        const response = await axios.post('http://3.36.252.208:9000/users', {
                "email": email,
                "nick": id,
                "pwd": password
            });
        setError(response.data.message);
    };

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
        makeAccount();
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
            {error !== "" && <h5 className="errorMessage">{error}</h5>}
        </form>
    )
};

export default SignIn;