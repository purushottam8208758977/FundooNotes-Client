// this file is invoked after index.html
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import * as firebase from 'firebase';
import { initializeFirebase } from './push-notifications';

// const firebaseConfig = {
//     apiKey: "AIzaSyDqegsQTciS__Q2c32DJPoXUZ9aAGIDQOY",
//     authDomain: "fundoonotes-55e5f.firebaseapp.com",
//     databaseURL: "https://fundoonotes-55e5f.firebaseio.com",
//     projectId: "fundoonotes-55e5f",
//     storageBucket: "fundoonotes-55e5f.appspot.com",
//     messagingSenderId: "542819478511",
//     appId: "1:542819478511:web:79183d6e9ad43e8a1e241a",
//     measurementId: "G-25B79PVRKV"
//   };


// firebase.initializeApp(firebaseConfig)
ReactDOM.render(<App />, document.getElementById('root'));// renders the App component on to the root dom node

initializeFirebase();

// firebase.initializeApp(firebaseConfig);

serviceWorker.unregister();
// //console.log("firebase try ---->",firebase.initializeApp(config))
// if (module.hot) { module.hot.accept(App); }


// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA


