// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyCJ8PlxJ3RVavG_kxJJfaDfZstn0AyHLAk",
    authDomain: "scissors-ba3f4.firebaseapp.com",
    projectId: "scissors-ba3f4",
    storageBucket: "scissors-ba3f4.appspot.com",
    messagingSenderId: "461108550603",
    appId: "1:461108550603:web:35ef4dc7d235b3ef6db44e",
    measurementId: "G-3J5D809ZGK"
};

const app = initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);

// Initialize Firebase



export default getFirestore();

//Use getAuth() to get the Auth service:
export const auth = getAuth(app)

// const analytics = getAnalytics(app);