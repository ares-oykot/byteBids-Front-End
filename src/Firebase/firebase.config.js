// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtiMTNzqCzcOz0f8FnUfXM6vkBlkt8guc",
  authDomain: "bytebids-eeafb.firebaseapp.com",
  projectId: "bytebids-eeafb",
  storageBucket: "bytebids-eeafb.appspot.com",
  messagingSenderId: "455612065492",
  appId: "1:455612065492:web:8d4b8dddecf2428f7a7d41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;