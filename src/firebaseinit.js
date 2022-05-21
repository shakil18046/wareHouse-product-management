// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQR4eOOSstCZZvKvA0lgs4XKTV7mcu5kU",
  authDomain: "assignment-eleven-47636.firebaseapp.com",
  projectId: "assignment-eleven-47636",
  storageBucket: "assignment-eleven-47636.appspot.com",
  messagingSenderId: "563282657266",
  appId: "1:563282657266:web:52d5165dcee945f269f56b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;