// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT5Vj4a2Yertzj92re51REYL0kVyf0onQ",
  authDomain: "my-chat-app-aa0fa.firebaseapp.com",
  projectId: "my-chat-app-aa0fa",
  storageBucket: "my-chat-app-aa0fa.appspot.com",
  messagingSenderId: "145594585701",
  appId: "1:145594585701:web:1319889280568671002c8c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);