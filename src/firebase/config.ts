import firebase from "firebase";
import "firebase/firestore";
import "firebase/storage";

let firebaseConfig = {
  apiKey: "AIzaSyC5VxWBXZPR8kbbXPg8v15ShiGIi___KqU",
  authDomain: "endys-ae96c.firebaseapp.com",
  databaseURL: "https://endys-ae96c.firebaseio.com",
  projectId: "endys-ae96c",
  storageBucket: "endys-ae96c.appspot.com",
  messagingSenderId: "507980302687",
  appId: "1:507980302687:web:d0e3de0b683f8be0c00eea",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };
