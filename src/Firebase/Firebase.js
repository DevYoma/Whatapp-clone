import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC7CcZDvhsMS_rKzoP6urVKQQKhsdHz1qI",
    authDomain: "whatsapp-clone-70a40.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-70a40.firebaseio.com",
    projectId: "whatsapp-clone-70a40",
    storageBucket: "whatsapp-clone-70a40.appspot.com",
    messagingSenderId: "671731503011",
    appId: "1:671731503011:web:828f660f0c66654dbe1416",
    measurementId: "G-0TEPKDH0FY"
  };

  //initialize the app
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;