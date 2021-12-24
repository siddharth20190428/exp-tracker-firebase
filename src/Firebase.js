import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, GoogleAuthProvider } from "@firebase/auth";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAO8b3bOa2iRwKSk1CkzpVjZAPiuLkHIEY",
  authDomain: "expense-tracker-torque.firebaseapp.com",
  projectId: "expense-tracker-torque",
  storageBucket: "expense-tracker-torque.appspot.com",
  messagingSenderId: "30479635373",
  appId: "1:30479635373:web:c6cc4ecf94be9b5d8c0724",
  measurementId: "G-YY92FV056E",
});
const db = getFirestore(firebaseApp);

const auth = getAuth();

const provider = new GoogleAuthProvider();

export { db, auth, provider };
