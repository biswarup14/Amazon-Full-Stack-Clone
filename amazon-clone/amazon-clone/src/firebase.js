// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyCxukqVM0vRVLg_n5gXAVowy_RwYnunktE",
    authDomain: "clo-b0a38.firebaseapp.com",
    projectId: "clo-b0a38",
    storageBucket: "clo-b0a38.appspot.com",
    messagingSenderId: "586126852350",
    appId: "1:586126852350:web:9a6bf884b4fc642de725af",
    measurementId: "G-7FWHDBVF9P"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth= firebase.auth();
  
  export {db, auth};