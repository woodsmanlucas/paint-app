import React, { useState } from 'react'

export function Register(){
    const [loginMessage, setLoginMessage] = useState("")
    const [loggedIn, setLoggedIn] = useState(false)
    const [token, setToken] = useState("")
    const [emailValue, setEmail] = useState("")
    const [passwordValue, setPassword] = useState("")
    const [confirmPasswordValue, setConfirmPassword] = useState("")
    const BASE_URL = "https://localhost:44374/api/auth/"

    function handleEmailFieldChange(event){
        setEmail(event.target.value)
    }

    function handlePasswordFieldChange(event){
        setPassword(event.target.value)
    }

    function handleConfirmPasswordFieldChange(event){
        setConfirmPassword(event.target.value)
    }

    async function register(e) {
        e.preventDefault();

        const email      = emailValue;
        const password   = passwordValue
        const confirmPassword = confirmPasswordValue
        const rememberMe = false;

        const URL           = BASE_URL + 'register';
        setEmail(""); // Clear input.
        setPassword(""); // Clear input.
        setConfirmPassword(""); // Clear input

        if(confirmPassword == password){

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
                  console.log(json)
                  if(json["status"]=="OK") {
                    sessionStorage.setItem("auth_token", json["token"]);
                    setToken(json["token"])
                    console.log(token);
                    setLoginMessage("The user has been Registered.")
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
        }else{
            setLoginMessage("Passwords do not match")
        }

      }

    return(
        <div className="register">
            <h1>{loginMessage}</h1>
            <form onSubmit={register}>
                <input type="text" value={emailValue} onChange={handleEmailFieldChange} placeholder="email"/>
                <input type="password" value={passwordValue} onChange={handlePasswordFieldChange} placeholder="password" />
                <input type="password" value={confirmPasswordValue} onChange={handleConfirmPasswordFieldChange} placeholder="Confirm password" />
                <button>Submit</button>
            </form>
        </div>
    )
}