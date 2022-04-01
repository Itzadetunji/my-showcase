// Import functions you need for the SDK you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJkrynf8cTyH8Hgs5FJV-c8gciIvpe3ZQ",
  authDomain: "twitter-clone-dummy.firebaseapp.com",
  projectId: "twitter-clone-dummy",
  storageBucket: "twitter-clone-dummy.appspot.com",
  messagingSenderId: "662140556779",
  appId: "1:662140556779:web:32fceabd13e3bcc082f5ae"
};

// Initialize firebase 
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };