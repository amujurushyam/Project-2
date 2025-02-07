// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8E0COungS9vMZFDO9DZ5Sq72QFi0fUPs",
  authDomain: "meal-match-78a0d.firebaseapp.com",
  projectId: "meal-match-78a0d",
  storageBucket: "meal-match-78a0d.firebasestorage.app",
  messagingSenderId: "759520280427",
  appId: "1:759520280427:web:1ec3c25847f5c469bf562e",
  measurementId: "G-1R7Z3S3MLZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// submit button

const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();

  // inputs
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("Siggned Sucessfully");
      window.location.href="login.html"
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Something Went Wrong");
      // ..
    });
});
