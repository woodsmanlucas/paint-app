import React, { useState } from 'react'

export function Login(){
    const [loginMessage, setLoginMessage] = useState("")
    const [loggedIn, setLoggedIn] = useState(false)
    const [token, setToken] = useState("")
    const [emailValue, setEmail] = useState("")
    const [passwordValue, setPassword] = useState("")
    const BASE_URL = "https://localhost:44374/api/auth/"

    function handleEmailFieldChange(event){
        setEmail(event.target.value)
    }

    function handlePasswordFieldChange(event){
        setPassword(event.target.value)
    }

    async function login(e) {
        e.preventDefault();

        const email      = emailValue;
        const password   = passwordValue
        const rememberMe = false;

        const URL           = BASE_URL + 'login';
        setEmail(""); // Clear input.
        setPassword(""); // Clear input.

        await fetch(URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Email:      email,
                Password:   password,
                RememberMe: rememberMe // Set default to false.
            })
        })
        // Response received.
        .then(response => response.json())
            // Data retrieved.
            .then(json => {
                // Store token with session data.
                if(json["status"]=="OK") {
                  sessionStorage.setItem("auth_token", json["token"]);
                  setToken(json["token"])
                  console.log(token);
                  setLoginMessage("The user has been logged in.")
                  setLoggedIn(true)
                }
                else {
                  setLoginMessage("An error occured at login. Try again." );
                }
            })
            // Data not retrieved.
            .catch(function (error) {
                if(sessionStorage[""])
                alert(error);
            })
            setToken(sessionStorage.getItem("auth_token"))
      }

    return(
        <div>
            <h1>{loginMessage}</h1>
            <form onSubmit={login}>
                <input type="text" value={emailValue} onChange={handleEmailFieldChange} placeholder="email"/>
                <input type="password" value={passwordValue} onChange={handlePasswordFieldChange} placeholder="password" />
                <button>Submit</button>
            </form>
        </div>
    )
}