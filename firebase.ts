// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBg6k62fnBRseO4rIkTtiiButWcljq1baE",
  authDomain: "animation-trove.firebaseapp.com",
  projectId: "animation-trove",
  storageBucket: "animation-trove.appspot.com",
  messagingSenderId: "1019512366066",
  appId: "1:1019512366066:web:797645cda1e62bcbb6016b",
  measurementId: "G-M7YZKZW82K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
