import firebase from 'firebase/app';
import 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyCcfvchmp8Tt5rVsGOnYGXtubaN84T8_b0",
    authDomain: "free-games-collection.firebaseapp.com",
    projectId: "free-games-collection",
    storageBucket: "free-games-collection.appspot.com",
    messagingSenderId: "449229718424",
    appId: "1:449229718424:web:8e9d2afc1960192ae861ed",
    measurementId: "G-1NVF689FK9"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  function signIn () {
      return auth.signInWithPopup(provider);
  }

  function logOut() {
      return auth.signOut();
  }

  export {
      auth,
      signIn,
      logOut
  }