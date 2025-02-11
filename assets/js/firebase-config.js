// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJNasY3zQ4qeUu0wLYXkEXojcIYxdJinE",
  authDomain: "tcc-dojo-leandro.firebaseapp.com",
  projectId: "tcc-dojo-leandro",
  storageBucket: "tcc-dojo-leandro.firebasestorage.app",
  messagingSenderId: "664167654906",
  appId: "1:664167654906:web:7397c99478dcd5d6237043",
  measurementId: "G-7X3N0K7YLX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);