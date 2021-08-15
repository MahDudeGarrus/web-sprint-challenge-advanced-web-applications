import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage";
import "./styles.scss";
import { axiosWithAuth } from "./helpers/axiosWithAuth";

function App() {
  const logout = () => {
    axiosWithAuth()
    .post("logout")
    .then(response => {
      localStorage.removeItem("token");
      window.location.href = '/login';
    })
    .catch(error => {
      console.log("Error logging out", error)
    })
  }

  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <Link to='/login'>login</Link>
          <a data-testid="logoutButton" href="#" onClick={logout}>logout</a>        
        </header>

        <Switch>
          <PrivateRoute path='/bubbles' component={BubblePage} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/' />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Add in two routes that link to the Login Component, one for the default path '/' and one for the '/login'.
//2. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.