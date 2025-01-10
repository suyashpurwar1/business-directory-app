// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzxrz0nKOU5PupVtUkK7OubchOvgGWZXM",
  authDomain: "react-native-f1eae.firebaseapp.com",
  projectId: "react-native-f1eae",
  storageBucket: "react-native-f1eae.appspot.com",
  messagingSenderId: "526118451144",
  appId: "1:526118451144:web:0093a2c18fa3bb237172fd",
  measurementId: "G-7S1L2DEF5V",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
