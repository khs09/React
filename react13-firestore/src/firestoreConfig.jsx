import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyAHw5mhrBQnhRODt3qRavf3-QCcGWoLOIQ",
//   authDomain: "myreactapp01-31368.firebaseapp.com",
//   projectId: "myreactapp01-31368",
//   storageBucket: "myreactapp01-31368.firebasestorage.app",
//   messagingSenderId: "974351102462",
//   appId: "1:974351102462:web:2c35d9e5ee9179114490af",
//   measurementId: "G-Y8DJMXGK0P"
// };

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,

};
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };