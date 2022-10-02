// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBXzQ1UNI3Mtp28XRGDzADE6Yfwi_0GMkQ",
    authDomain: "forever-16eca.firebaseapp.com",
    projectId: "forever-16eca",
    storageBucket: "forever-16eca.appspot.com",
    messagingSenderId: "444037414621",
    appId: "1:444037414621:web:912977df8d9cdcca432534",
    measurementId: "G-S496CEBP1N"
  };

// Initialize Firebase
const app = !firebase.apps.length
? firebase.initializeApp(firebaseConfig)
: firebase.app();

const db = app.firestore();

export default db;