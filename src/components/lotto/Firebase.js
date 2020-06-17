import * as firebase from 'firebase';
// import firestore from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCl80NJvInUBxyeoTm95PkvP4CKH9z_pQY",
  authDomain: "kfortune-2e96e.firebaseapp.com",
  databaseURL: "https://kfortune-2e96e.firebaseio.com",
  projectId: "kfortune-2e96e",
  storageBucket: "kfortune-2e96e.appspot.com",
  messagingSenderId: "134824016755",
  appId: "1:134824016755:web:c5a377c8fb86037576a306",
  measurementId: "G-XY13PYTEP1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  // firebase.firestore().settings(settings);
  
  export default firebase;