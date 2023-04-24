import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCJbwcttbuoXPCS-GHIY27iMzMipICawTA",
  authDomain: "vue-blog-8d6d4.firebaseapp.com",
  projectId: "vue-blog-8d6d4",
  storageBucket: "vue-blog-8d6d4.appspot.com",
  messagingSenderId: "370377587704",
  appId: "1:370377587704:web:a179c4583b0af0f1b2340d"
};

// init firebase
firebase.initializeApp(firebaseConfig)

//database setup
const db= firebase.firestore()
let timestamp= firebase.firestore.FieldValue.serverTimestamp
export {db, timestamp}