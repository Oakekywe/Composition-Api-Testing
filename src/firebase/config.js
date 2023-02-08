import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyB1TbVyvothyP0nB0FjWjXTsERxVJ5ryMk",
  authDomain: "vue-blog-system-c71c7.firebaseapp.com",
  projectId: "vue-blog-system-c71c7",
  storageBucket: "vue-blog-system-c71c7.appspot.com",
  messagingSenderId: "969612050750",
  appId: "1:969612050750:web:3908bdb7464840d24a2c6f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log(db);
export {db}