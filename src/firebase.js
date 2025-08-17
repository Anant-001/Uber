// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBYByyBkzA3oy-nuKZnlhjC1LBACGGUBY4",
    authDomain: "uber-80d75.firebaseapp.com",
    projectId: "uber-80d75",
    storageBucket: "uber-80d75.firebasestorage.app",
    messagingSenderId: "238415455214",
    appId: "1:238415455214:web:0aa111a4b263011f2864ff",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
