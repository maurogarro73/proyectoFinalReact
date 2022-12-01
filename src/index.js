import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';

initializeApp({
  apiKey: 'AIzaSyDm7VU1m852Tt42lumPAo9kTSmDJQaYHf4',
  authDomain: 'ecommerce-react-mauro.firebaseapp.com',
  projectId: 'ecommerce-react-mauro',
  storageBucket: 'ecommerce-react-mauro.appspot.com',
  messagingSenderId: '81218187105',
  appId: '1:81218187105:web:38dab741f4bcd70d659f20',
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
