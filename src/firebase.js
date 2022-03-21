import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD9B0-o7WlnYmUloYIhNZpnmZkam51nBVU",
    authDomain: "tiendaviajera-9d75e.firebaseapp.com",
    projectId: "tiendaviajera-9d75e",
    storageBucket: "tiendaviajera-9d75e.appspot.com",
    messagingSenderId: "384963410612",
    appId: "1:384963410612:web:1a8bb05a8af2e62d44b5e1",
    measurementId: "G-G5NYM6K0ZM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  export {auth}