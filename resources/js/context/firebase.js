import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlqhc876mr3fzStj1b4EMOpW0S7azjKv4",
  authDomain: "chat-a8029.firebaseapp.com",
  projectId: "chat-a8029",
  storageBucket: "chat-a8029.appspot.com",
  messagingSenderId: "550361717156",
  appId: "1:550361717156:web:16d4f219a886b0ce25c931"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
