// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-6fd57.firebaseapp.com",
  projectId: "mern-estate-6fd57",
  storageBucket: "mern-estate-6fd57.appspot.com",
  messagingSenderId: "1055094856714",
  appId: "1:1055094856714:web:0311f4a1e7b210603c13f3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
