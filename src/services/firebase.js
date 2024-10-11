// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBppExOVeVowXSaZ74tNiexTfWbjo5qGdc",
    authDomain: "aiweb-ea6f8.firebaseapp.com",
    projectId: "aiweb-ea6f8",
    storageBucket: "aiweb-ea6f8.appspot.com",
    messagingSenderId: "140948327087",
    appId: "1:140948327087:web:579af8e30b09393478e25a",
    measurementId: "G-TSN2ZVFXY9"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // For Firestore database

export { db };

