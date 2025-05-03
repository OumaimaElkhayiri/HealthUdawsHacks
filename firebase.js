// firebaseConfig.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBX5iThB33G42c7NiRveMf7x5D939alBGg",
  authDomain: "heathu-77f57.firebaseapp.com",
  projectId: "heathu-77f57",
  storageBucket: "heathu-77f57.appspot.com", // FIXED the domain here
  messagingSenderId: "42364513678",
  appId: "1:42364513678:web:baa374ab0a3150a7acc8df"
};

// Prevent reinitialization during hot reload
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
