import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAdEfwGrQKA5z_qQUJk__a2wDBPgBrhYVk",
  authDomain: "project-71-7f532.firebaseapp.com",
  projectId: "project-71-7f532",
  storageBucket: "project-71-7f532.appspot.com",
  messagingSenderId: "669552007118",
  appId: "1:669552007118:web:97082f8a47cd5416817d9f"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
