// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo1OOCzf2RhK_Dol9eKj67MBweQy4zsMs",
  authDomain: "cove-9068b.firebaseapp.com",
  projectId: "cove-9068b",
  storageBucket: "cove-9068b.appspot.com",
  messagingSenderId: "595516903556",
  appId: "1:595516903556:web:c4a29273ac10fc221572d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth =  getAuth(app);
const storage = getStorage(app);

export { Auth }
