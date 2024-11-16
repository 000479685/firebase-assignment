// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdeV7S0wCV1UKgZ-7e0A8b462pOtdgeYA",

  authDomain: "blog-app-6d6f5.firebaseapp.com",

  projectId: "blog-app-6d6f5",

  storageBucket: "blog-app-6d6f5.firebasestorage.app",

  messagingSenderId: "631768240373",

  appId: "1:631768240373:web:ae7ba7a4378440a32db5bc",

  measurementId: "G-KNHKJJPGER"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
