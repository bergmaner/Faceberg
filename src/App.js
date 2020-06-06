import React, { useEffect } from 'react';
import './App.css';
import { userRef, firebaseApp } from './services/Firebase/';
import signIn from './services/Firebase/signIn';
import Login from './components/Login';
import Register from './components/Register';

function App() {

    firebaseApp.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user.uid);
      } else {
       console.log('no');
      }
    });

  const onSignIn = () => {
    const result = signIn('demogo@op.pl','haslo123');
    console.log(result);
  }
  return (
    <div className="App">
      <Login/>
      <Register/>
     <button onClick = { () => onSignIn() }>Sign In</button>
     <button onClick = { () => firebaseApp.auth().signOut() }>Log Out</button>
    </div>
  );
}

export default App;
