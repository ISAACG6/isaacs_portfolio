import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAt8X3lHTFxq7KVv8I1R7K0gDTwwzB6DZc",
  authDomain: "igportfolio-20351.firebaseapp.com",
  projectId: "igportfolio-20351",
  storageBucket: "igportfolio-20351.firebasestorage.app",
  messagingSenderId: "609442911542",
  appId: "1:609442911542:web:b65aa6206466cd62980f97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);