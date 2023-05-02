
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD3o8mW8CojLIyGTPB0r5rSZwqZEKyuHwI",
    authDomain: "linkedin-clone-1bf1e.firebaseapp.com",
    projectId: "linkedin-clone-1bf1e",
    storageBucket: "linkedin-clone-1bf1e.appspot.com",
    messagingSenderId: "488879390432",
    appId: "1:488879390432:web:2f485460651412a1edda85",
    measurementId: "G-8E28SWDF9X"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth =firebase.auth();

  export {db , auth};