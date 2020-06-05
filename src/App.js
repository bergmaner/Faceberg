import React, { useEffect } from 'react';
import './App.css';
import { userRef } from './services/Firebase/';
import signUp from './services/Firebase/signUp';
import signIn from './services/Firebase/signIn';

function App() {

  useEffect( () => {
    function callFunc(){
      userRef.push({
        email: 'demogo@op.pl',
        password: 'haslo123'
      })
    }
    //callFunc();
  },[]);

  const onSignUp = () => {
    const result = signUp('demogo@op.pl','haslo123','Lanner','Halington');
    console.log(result);
  }
  const onSignIn = () => {
    const result = signIn('demogo@op.pl','haslo123');
    console.log(result);
  }
  return (
    <div className="App">
     <button onClick = { () => onSignUp() }>Sign Up</button>
     <button onClick = { () => onSignIn() }>Sign In</button>
    </div>
  );
}

export default App;
