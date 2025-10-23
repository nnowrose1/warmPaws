// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBesgs54muPo-UC735_l38wiZbs6g3XcMo",
  authDomain: "warm-paws-159fe.firebaseapp.com",
  projectId: "warm-paws-159fe",
  storageBucket: "warm-paws-159fe.firebasestorage.app",
  messagingSenderId: "664537446611",
  appId: "1:664537446611:web:b8fb8914f9cabcdc887c26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

