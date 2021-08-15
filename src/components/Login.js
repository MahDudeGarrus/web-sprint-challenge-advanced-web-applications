import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../helpers/axiosWithAuth";

const Login = () => {
  const [ login, setLogin ] = useState({ 
    username: "", 
    password: ""
  });

  const handleChange = event => {
    setLogin({
      ...login,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault()
    axiosWithAuth().post('/login', login)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log("Error in login", error)
    })
  }
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const error = "";
  //replace with error state

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <form onSubmit={handleSubmit} >
          <label htmlFor="username">Username: </label>
          <input id="username" name="username" value={login.username} onChange={handleChange} />
          <label htmlFor="password">Password: </label>
          <input id="password" name="password" value={login.password} onChange={handleChange} type="password"/>
          <button type="submit">Login!</button>
        </form>
      </div>

      <p id="error" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"