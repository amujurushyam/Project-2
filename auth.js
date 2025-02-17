import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA8E0COungS9vMZFDO9DZ5Sq72QFi0fUPs",
  authDomain: "meal-match-78a0d.firebaseapp.com",
  projectId: "meal-match-78a0d",
  storageBucket: "meal-match-78a0d.firebasestorage.app",
  messagingSenderId: "759520280427",
  appId: "1:759520280427:web:1ec3c25847f5c469bf562e",
  measurementId: "G-1R7Z3S3MLZ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Siggned In Sucessfully");
      window.location.href = "login.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Something Went Wrong");
    });
});

document.getElementById("guest").onclick = function () {
  alert("Guest Logged In Sucessfully");
  window.location.href = "loading.html";
};

document.getElementById("guest-logout").onclick = function () {
  alert("Guest Logged Out Sucessfully");
  window.location.href = "index.html";
};
