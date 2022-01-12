import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbRs7OSFIf0Xvsl2mzAcBBesLTPxaRjUE",
  authDomain: "ubereats-clone-b1cec.firebaseapp.com",
  databaseURL: "https://ubereats-clone-b1cec-default-rtdb.firebaseio.com",
  projectId: "ubereats-clone-b1cec",
  storageBucket: "ubereats-clone-b1cec.appspot.com",
  messagingSenderId: "768580925644",
  appId: "1:768580925644:web:482f1e4dc37ac13f506a69",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
