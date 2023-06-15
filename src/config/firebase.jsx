// Import the functions you need from the SDKs you need
import Firebase, { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/firestore';
import 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5-O1FouS0Bj4H0c3u2GlVDhFRPLhVPqw",
  authDomain: "socialmedia-network.firebaseapp.com",
  projectId: "socialmedia-network",
  storageBucket: "socialmedia-network.appspot.com",
  messagingSenderId: "113375732532",
  appId: "1:113375732532:web:36bd5acce086e44cfcbb61",
  measurementId: "G-7PRE4625VX"
};

// Initialize Firebase
const firebase = Firebase.initializeApp(firebaseConfig);
const analytics = Firebase.analytics(firebase);
const firestore = Firebase.firestore(firebase);

export { firebase, analytics, firestore };