import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { firebaseApp } from "./services/Firebase/";
import Login from "./components/Login";
import Register from "./components/Register";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import ProfilePage from "./components/ProfilePage";

function App() {
  const [status, setStatus] = useState("");
  const [signIn, setSignIn] = useState(true);

  firebaseApp.auth().onAuthStateChanged(function (user) {
    if (user) {
      setStatus("logged");
    } else {
      setStatus("notLogged");
    }
  });

  const changeSignIn = (value) => {
    setSignIn(value);
  };

  return (
    <div className="App">
      <Navbar status={status} signIn={signIn} changeSignIn={changeSignIn} />
      <Router>
        <Route exact path="/">
          {status === "logged" && <Feed />}
          {status === "notLogged" && signIn === true && (
            <Login changeSignIn={changeSignIn} />
          )}
          {status === "notLogged" && signIn === false && (
            <Register changeSignIn={changeSignIn} />
          )}
        </Route>
        <Route path="/:uid">
         <ProfilePage/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
