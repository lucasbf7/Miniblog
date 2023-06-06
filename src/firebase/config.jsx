import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBDN2L6Nreou9oDmeq5ahE81j1lUoLdOhk",
  authDomain: "miniblog-lf.firebaseapp.com",
  projectId: "miniblog-lf",
  storageBucket: "miniblog-lf.appspot.com",
  messagingSenderId: "671339796448",
  appId: "1:671339796448:web:f8bce86d71ef222427bd85"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };