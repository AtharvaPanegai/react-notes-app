/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,RecaptchaVerifier  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDVAQkOIHQdWX81RD-G_QKdcgBMoSOqiQ",
  authDomain: "notesapp-f675b.firebaseapp.com",
  projectId: "notesapp-f675b",
  storageBucket: "notesapp-f675b.appspot.com",
  messagingSenderId: "85754696040",
  appId: "1:85754696040:web:312b066e9eadc2dfd446dd",
  measurementId: "G-PX9EL30RX4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export { app, analytics,auth };
