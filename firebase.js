import firebase from 'firebase'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCgNZfNRQezTYV2RizP0vIHB7tmKgf79hE",
    authDomain: "rn-instaclone-e4d41.firebaseapp.com",
    projectId: "rn-instaclone-e4d41",
    storageBucket: "rn-instaclone-e4d41.appspot.com",
    messagingSenderId: "615797720261",
    appId: "1:615797720261:web:1f95eb97c981cecef6dcac"
  };

// Initialize Firebase
!firebaseConfig.apps.length ? firebaseConfig.initializeApp(firebaseConfig) : firebaseConfig.app()

export default firebase