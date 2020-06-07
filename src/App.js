import React, { useState } from 'react';
import './App.css';
import { firebaseApp } from './services/Firebase/';
import Login from './components/Login';
import Register from './components/Register';

function App() {

    const [ status, setStatus ] = useState('signIn');

    firebaseApp.auth().onAuthStateChanged(function(user) {
      if (user) {
        setStatus('logged');
      } 
    });

  const changeStatus = (value) => {
    setStatus(value);
  }

  return (
    <div className="App">
      { status === 'logged' && <div>Login</div>}
      { status === 'signIn' && <Login changeStatus = { changeStatus }/>}
      { status === 'signUp' && <Register changeStatus = { changeStatus }/> }
     <button onClick = { () => firebaseApp.auth().signOut() }>Log Out</button>
    </div>
  );
}

export default App;
