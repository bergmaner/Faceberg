import React, { useEffect } from 'react';
import './App.css';
import { userRef } from './services/Firebase/';

function App() {

  useEffect( () => {
    function callFunc(){
      userRef.set({
        email: "test@gmail.com",
        password: "haslo123"
      })
    }
    callFunc();
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
