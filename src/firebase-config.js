import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

// Zaid Firebase Config  
// const firebaseConfig = {
//   apiKey: "AIzaSyD8o39IDNz8VGh6keEWnXsYnL7mj8CFOpg",
//   authDomain: "horizon-download-brochure-otp.firebaseapp.com",
//   projectId: "horizon-download-brochure-otp",
//   storageBucket: "horizon-download-brochure-otp.appspot.com",
//   messagingSenderId: "707523211072",
//   appId: "1:707523211072:web:19a69765b7304ad9cad4a5"
// };


// Horizon Firebase Config  
const firebaseConfig = {
    apiKey: "AIzaSyAqdrChYFzX_9A4nFx4f9Hl-c_ahGMcqnU",
    authDomain: "horizon-download-brochur-3e26a.firebaseapp.com",
    projectId: "horizon-download-brochur-3e26a",
    storageBucket: "horizon-download-brochur-3e26a.appspot.com",
    messagingSenderId: "787738449009",
    appId: "1:787738449009:web:ef2dad79a4ebb31cd577d0"
  };

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
