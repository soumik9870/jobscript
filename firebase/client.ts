// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjkOyZlNfMvEzM4A69pBktt1N4g_CfT6w",
  authDomain: "jobscript-d2416.firebaseapp.com",
  projectId: "jobscript-d2416",
  storageBucket: "jobscript-d2416.firebasestorage.app",
  messagingSenderId: "574676824296",
  appId: "1:574676824296:web:138c4238d862d421ae995d",
  measurementId: "G-BYWBTSLHQ9"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);