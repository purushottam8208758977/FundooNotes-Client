import firebase from 'firebase';

export const initializeFirebase = () => {
  firebase.initializeApp({
    apiKey: "AIzaSyDqegsQTciS__Q2c32DJPoXUZ9aAGIDQOY",
    authDomain: "fundoonotes-55e5f.firebaseapp.com",
    databaseURL: "https://fundoonotes-55e5f.firebaseio.com",
    projectId: "fundoonotes-55e5f",
    storageBucket: "fundoonotes-55e5f.appspot.com",
    messagingSenderId: "542819478511",
    appId: "1:542819478511:web:79183d6e9ad43e8a1e241a",
    measurementId: "G-25B79PVRKV"
  });
}
export const askForPermissioToReceiveNotifications = async () => {
    try {
      const messaging = firebase.messaging();
      await messaging.requestPermission();
      const token = await messaging.getToken();
      console.log('token of firebase -->', token);
      
      return token;
    } catch (error) {
      console.error("Error of FIREBASE --->",error);
    }
  }
