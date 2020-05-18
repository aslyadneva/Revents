import firebase from 'firebase/app'; 
import 'firebase/firestore'; 
import 'firebase/database'; 
import 'firebase/auth'; 
import 'firebase/storage';  

const firebaseConfig = {
  apiKey: "AIzaSyD4dVodyfQw1XWa5ONqJlJuw_eQOjoMeu0",
  authDomain: "revents-d6dfc.firebaseapp.com",
  databaseURL: "https://revents-d6dfc.firebaseio.com",
  projectId: "revents-d6dfc",
  storageBucket: "revents-d6dfc.appspot.com",
  messagingSenderId: "45950490132",
  appId: "1:45950490132:web:083e1773b419716144f901"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore(); 

export default firebase; 