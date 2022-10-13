// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBybOyzBdqvxCxRb7AxVTCzjItSQ9P2M4Q",
  authDomain: "netflix-fc7f1.firebaseapp.com",
  projectId: "netflix-fc7f1",
  storageBucket: "netflix-fc7f1.appspot.com",
  messagingSenderId: "295983153517",
  appId: "1:295983153517:web:71b840f06a63f6c6f31a64"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);