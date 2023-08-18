// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAU7Di4pQgIq-qn3anUjtg486xVDKeH5Ks",
  authDomain: "complete-sign-in-page.firebaseapp.com",
  projectId: "complete-sign-in-page",
  storageBucket: "complete-sign-in-page.appspot.com",
  messagingSenderId: "717956297543",
  appId: "1:717956297543:web:1277e4440dfdd8b9ea9262"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
