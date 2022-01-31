import firebase from "firebase"
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDkPmxDTyDabN7PbIXjPVx0r7gL4tDaUgU",
    authDomain: "animeslist-c68cb.firebaseapp.com",
    projectId: "animeslist-c68cb",
    storageBucket: "animeslist-c68cb.appspot.com",
    messagingSenderId: "117593428207",
    appId: "1:117593428207:web:af0d70399ee762e16acb1a"
  };

  firebase.initializeApp(firebaseConfig);

export default firebase