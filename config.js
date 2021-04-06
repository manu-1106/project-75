import firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyCTNyg3TYKhCKmH3mj7E_JmLNbQDXoY_fE",
    authDomain: "story-hub-4aa49.firebaseapp.com",
    projectId: "story-hub-4aa49",
    storageBucket: "story-hub-4aa49.appspot.com",
    messagingSenderId: "505182224725",
    appId: "1:505182224725:web:d86a372155bcdacca4efdc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();