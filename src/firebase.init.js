// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_APIKEY,
    // authDomain: process.env.REACT_APP_AUTHDOMAIN,
    // projectId: process.env.REACT_APP_PROJECTID,
    // storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    // appId: process.env.REACT_APP_APPID

    apiKey: "AIzaSyB8t0p9vVPy7nW5lbiJhkRV06Nfo0UlpF4",
    authDomain: "doctors-portal-86f60.firebaseapp.com",
    projectId: "doctors-portal-86f60",
    storageBucket: "doctors-portal-86f60.appspot.com",
    messagingSenderId: "321143354887",
    appId: "1:321143354887:web:44345f60ccbaa6d48f1ca2"
};
// console.log(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;