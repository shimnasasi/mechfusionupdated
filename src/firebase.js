import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBqtWnui9V7YUpCUR36PnmDebVtq5ukSoY",
  authDomain: "mechfusion-bd900.firebaseapp.com",
  projectId: "mechfusion-bd900",
  storageBucket: "mechfusion-bd900.firebasestorage.app",
  messagingSenderId: "503715697726",
  appId: "1:503715697726:web:77f52456b226e31d986d6f",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
