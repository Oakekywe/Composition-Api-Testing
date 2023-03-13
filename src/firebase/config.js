import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCdC7-81-wtreogtgAEPjePXG-CW1m2LU0",
  authDomain: "vue-blog-39423.firebaseapp.com",
  projectId: "vue-blog-39423",
  storageBucket: "vue-blog-39423.appspot.com",
  messagingSenderId: "72841176729",
  appId: "1:72841176729:web:0e313ad9c8a4755c753a08"
};

// init firebase
firebase.initializeApp(firebaseConfig)

//database setup
const db= firebase.firestore()
let timestamp= firebase.firestore.FieldValue.serverTimestamp
export {db, timestamp}