import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCRKEanVPFsltVeM6pX7Hr0rn8V_uhBkd4",
  authDomain: "boginoo0.firebaseapp.com",
  projectId: "boginoo0",
  storageBucket: "boginoo0.appspot.com",
  messagingSenderId: "823415967027",
  appId: "1:823415967027:web:9e1625e56b1d78d3508246",
  measurementId: "G-K09V8K26LD"
};
  let app = firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth(app)
  export const firestore = firebase.firestore(app)

  export const createDoc = (path, data) => {
    firebase.firestore().doc(path).set({
      createdAt: firebase.firestore.FieldValue.serverTimestamp() || null,
      ...data
    })
  }