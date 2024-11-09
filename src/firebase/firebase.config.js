// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbhx_JyhzBVn0CrOBq76XUUrJjFTYJ7a0",
  authDomain: "iceproject-b188d.firebaseapp.com",
  projectId: "iceproject-b188d",
  storageBucket: "iceproject-b188d.firebasestorage.app",
  messagingSenderId: "239382889429",
  appId: "1:239382889429:web:12be62185202aad0a6b35c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)