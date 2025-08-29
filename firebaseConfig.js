
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAy3lRod9j4Le4p2_9OIKbqH18iYPABfdA",
  authDomain: "goalproject-ciro.firebaseapp.com",
  projectId: "goalproject-ciro",
  storageBucket: "goalproject-ciro.firebasestorage.app",
  messagingSenderId: "873512784654",
  appId: "1:873512784654:web:ccd9661694e1ff2f2b3d5f"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)