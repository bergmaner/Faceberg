import React, { useState } from 'react';
import './App.css';
import { firebaseApp } from './services/Firebase/';
import Login from './components/Login';
import Register from './components/Register';
import Feed from './components/Feed';
import Navbar from './components/Navbar';

function App() {

    const [ status, setStatus ] = useState('');
    const [ signIn, setSignIn ] = useState(true);

    firebaseApp.auth().onAuthStateChanged(function(user) {
      if (user) {
        setStatus('logged');
      } 
      else{
        setStatus('notLogged');
      }
    });

  const changeSignIn = (value) => {
    setSignIn(value);
  }

  return (
    <div className="App">
      <Navbar status = { status } signIn = {signIn} changeSignIn = { changeSignIn } />
      { status === 'logged' && <Feed/> }
      { status === 'notLogged' && signIn === true && <Login changeSignIn = { changeSignIn }/>}
      { status === 'notLogged' && signIn === false && <Register changeSignIn = { changeSignIn }/> }
     <button onClick = { () => (firebaseApp.auth().signOut(), setSignIn(true)) }>Log Out</button>
    </div>
  );
}

export default App;
