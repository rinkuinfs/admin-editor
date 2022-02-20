import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCDp4TM_x8YEruLuoV9WK3LBaUJBLkVwQ",
  authDomain: "atlasttest-56614.firebaseapp.com",
  databaseURL: "https://evernote-clone-2d281.firebaseio.com",
  projectId: "atlasttest-56614",
  storageBucket: "atlasttest-56614.appspot.com",
  messagingSenderId: "444194612979",
  appId: "1:444194612979:web:bc702315f8c6bc174d3986",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
