// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHfeQ4krAIBaX9bNoY_WlRzl9P_900BuI",
  authDomain: "netflixgpt-fc1b5.firebaseapp.com",
  projectId: "netflixgpt-fc1b5",
  storageBucket: "netflixgpt-fc1b5.appspot.com",
  messagingSenderId: "39144342553",
  appId: "1:39144342553:web:e8cfb47f899264a707d688",
  measurementId: "G-FKHPW9C2YQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();