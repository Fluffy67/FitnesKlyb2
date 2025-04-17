// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB9JHDb9qDx_dmvZKshlJJUf8fM0GYT3A",
  authDomain: "fitnes-klub.firebaseapp.com",
  databaseURL: "https://fitnes-klub-default-rtdb.firebaseio.com",
  projectId: "fitnes-klub",
  storageBucket: "fitnes-klub.appspot.com",
  messagingSenderId: "965217481320",
  appId: "1:965217481320:web:8b8a9b4edefdc2e129c1dd",
  measurementId: "G-NZSF8KH4QL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Register form submission
document.getElementById('register-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User registered:", userCredential.user);
  } catch (error) {
    console.error("Error registering user:", error.message);
  }
});

// Login form submission
document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in:", userCredential.user);
  } catch (error) {
    console.error("Error logging in user:", error.message);
  }
});
