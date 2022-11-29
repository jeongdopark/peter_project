// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
let toggle = document.querySelector('.toggle');
let menu = document.querySelector('.menu');
let menu_login = document.querySelector('.login');
let login_modal_container = document.querySelector('.login_modal_container');
let x_button = document.querySelector('.x_button');
toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
})

menu_login.addEventListener('click', () => {
    login_modal_container.classList.add('seen');
    login_modal_container.classList.remove('remove');
})

x_button.addEventListener('click', () => {
    login_modal_container.classList.remove('seen');
    login_modal_container.classList.add('remove');
})



const firebaseConfig = {
  apiKey: "AIzaSyAqdMYDEQ9wWLJ0fCPfKA2x_Isl-qBD9cg",
  authDomain: "peter-login.firebaseapp.com",
  projectId: "peter-login",
  storageBucket: "peter-login.appspot.com",
  messagingSenderId: "951634914028",
  appId: "1:951634914028:web:32dbf6d872043379f293c9",
  measurementId: "G-LFXJ7YQFD4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);