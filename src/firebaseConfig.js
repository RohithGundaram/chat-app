// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHuDgd80GX_0l0JV0DDlXwfstFu5yOy-Q",
  authDomain: "chatapp-ddc70.firebaseapp.com",
  projectId: "chatapp-ddc70",
  storageBucket: "chatapp-ddc70.appspot.com",
  messagingSenderId: "833473170312",
  appId: "1:833473170312:web:e9be6f7d6c0cc93cd6083d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();