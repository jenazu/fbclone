import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAVFAvnahkYCCmrOHtSQlhgL8eWxeEXq0c",
  authDomain: "facebook-clone-773be.firebaseapp.com",
  projectId: "facebook-clone-773be",
  storageBucket: "facebook-clone-773be.appspot.com",
  messagingSenderId: "769385342844",
  appId: "1:769385342844:web:8dbd3d4f71d8dccc56e6f9"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
