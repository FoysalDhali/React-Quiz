// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// Initialize Firebase
const app = initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET ,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDERID ,
  appId: process.env.REACT_APP_APP_ID
});

export default app;
