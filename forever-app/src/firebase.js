// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaiNyxUQiroMzal3sYThWxmG6BEfirga4",
  authDomain: "forever-a3010.firebaseapp.com",
  projectId: "forever-a3010",
  storageBucket: "forever-a3010.appspot.com",
  messagingSenderId: "207675297227",
  appId: "1:207675297227:web:34bf3700d0278d5638ba4e",
  measurementId: "G-H4GJM2K25J"
};

// Initialize Firebase
const app = !firebase.apps.length
? firebase.initializeApp(firebaseConfig)
: firebase.app();

const db = app.firestore();

export default db;