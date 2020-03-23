import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCTedmZOt6s4APCJ1MuL3LmPOsbvyZ56yA",
  authDomain: "react-ecomm-600e3.firebaseapp.com",
  databaseURL: "https://react-ecomm-600e3.firebaseio.com",
  projectId: "react-ecomm-600e3",
  storageBucket: "react-ecomm-600e3.appspot.com",
  messagingSenderId: "464173420517",
  appId: "1:464173420517:web:5d5650eacd87a787a2290c",
  measurementId: "G-4SEZ8STEY0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
