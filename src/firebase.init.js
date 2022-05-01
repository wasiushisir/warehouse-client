// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArAq8vmcO0yFhtKZk1e5lyGOE-hn6rib4",
  authDomain: "fr-telecom-bcd17.firebaseapp.com",
  projectId: "fr-telecom-bcd17",
  storageBucket: "fr-telecom-bcd17.appspot.com",
  messagingSenderId: "879622142630",
  appId: "1:879622142630:web:0025d631bff14572d15267"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;