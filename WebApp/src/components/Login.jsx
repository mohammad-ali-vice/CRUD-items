import React, { useState } from "react";
import axios from "axios";

function Login(props){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [displayNone, setDisplayNone] = useState("None");


    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(username, password);
        validateLogin(username,password);
    }

    function validateLogin(username,password){
        var payload = [{
            "username":username,
            "password": password
        }];
        axios.post(`http://127.0.0.1:9000/login/`, payload)
        .then(function (response){
            if(response.data === true){
                props.setIsAuthenticated(true);
            }else{
                props.setIsAuthenticated(false);
                setDisplayNone("block");
                setUsername("");
                setPassword("");
            }
        }).catch( function (error){
            console.log(error);
        });
    }

    return(
    <div className="login-body">
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" value={password} placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
           
            <button type="submit">Login</button>
        <div className="wrong-login" style={{display: displayNone}}>Incorrect Username or Password. Try again.</div>
        </form>
    </div>
);
}

export default Login;