// Import functions you need for the SDK you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjhxRMY7sQOCGEATXZ1dN_mwaXWqJdfOA",
  authDomain: "twitter-clone-8a43b.firebaseapp.com",
  projectId: "twitter-clone-8a43b",
  storageBucket: "twitter-clone-8a43b.appspot.com",
  messagingSenderId: "654882377847",
  appId: "1:654882377847:web:7987585a0335548afeb672",
  measurementId: "G-F9V8M30LVN"
};

// Initialize firebase 
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };