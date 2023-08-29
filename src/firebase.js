// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXh5sAPY0l5WXTIKeUzC5yQ0VXp9cxoRQ",
  authDomain: "react-chat-50604.firebaseapp.com",
  projectId: "react-chat-50604",
  storageBucket: "react-chat-50604.appspot.com",
  messagingSenderId: "553152510921",
  appId: "1:553152510921:web:6063867df03d4f30038618",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);