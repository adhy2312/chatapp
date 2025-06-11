import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3IfhEgguvOVeAPlxzpwdeXtruI47X1UE",
  authDomain: "chatssy-a615d.firebaseapp.com",
  projectId: "chatssy-a615d",
  storageBucket: "chatssy-a615d.firebasestorage.app",
  messagingSenderId: "58190781053",
  appId: "1:58190781053:web:27885a281106fa05fdef14"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
