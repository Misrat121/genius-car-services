// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqK6Zoj9yx8yea63MSidXyFB9IOvIiqBI",
  authDomain: "genius-car-services-c6ddc.firebaseapp.com",
  projectId: "genius-car-services-c6ddc",
  storageBucket: "genius-car-services-c6ddc.appspot.com",
  messagingSenderId: "632664721990",
  appId: "1:632664721990:web:d3546532cfc2436fe89847"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;