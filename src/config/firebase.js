import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfb397HqAdNC_ULI71_DudmMhSCNWNQAk",
  authDomain: "rafquiz.firebaseapp.com",
  databaseURL:
    "https://rafquiz-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "rafquiz",
  storageBucket: "rafquiz.appspot.com",
  messagingSenderId: "431280069816",
  appId: "1:431280069816:web:3e40473dfaf4e79ef8e84d",
  measurementId: "G-G67N5DGS13",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
