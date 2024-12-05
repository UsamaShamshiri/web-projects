// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA7yHE9svrXBJSDlqUlj-9XobimjUAF3OU",
    authDomain: "form-auth-byusama.firebaseapp.com",
    projectId: "form-auth-byusama",
    storageBucket: "form-auth-byusama.appspot.com",
    messagingSenderId: "111895249557",
    appId: "1:111895249557:web:e988e0b291b98ce3bcd19c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };