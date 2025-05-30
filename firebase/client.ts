// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBI0G_iaUxm5YaisfG9G6tLw9e3YnDldXg",
    authDomain: "prepwise-d7c25.firebaseapp.com",
    projectId: "prepwise-d7c25",
    storageBucket: "prepwise-d7c25.firebasestorage.app",
    messagingSenderId: "936015707957",
    appId: "1:936015707957:web:6fc4c33cf7b8bdbb47967c",
    measurementId: "G-GPFTDG1DB8"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);