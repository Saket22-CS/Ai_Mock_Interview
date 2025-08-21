// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjR-Ht9PfmG2J9QWfXrAcwpsBFRJEyNMM",
  authDomain: "prepwise-45867.firebaseapp.com",
  projectId: "prepwise-45867",
  storageBucket: "prepwise-45867.firebasestorage.app",
  messagingSenderId: "600808578901",
  appId: "1:600808578901:web:cc1c68c3c16bb6f362d9dc",
  measurementId: "G-ELMJEPQCBS"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);