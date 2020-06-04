import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBBeW5_MiD3TMRlDuN2vrm2xiYOU6O3W2E",
    authDomain: "faceberg-d3220.firebaseapp.com",
    databaseURL: "https://faceberg-d3220.firebaseio.com",
    projectId: "faceberg-d3220",
    storageBucket: "faceberg-d3220.appspot.com",
    messagingSenderId: "504421882897",
    appId: "1:504421882897:web:838cfc42f9918e3d8265b0",
    measurementId: "G-N7FG32599B"
  };
  export const firebaseApp = firebase.initializeApp(firebaseConfig);
  export const userRef = firebaseApp.database().ref("users");
  