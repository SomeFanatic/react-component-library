import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const app = firebase.initializeApp({
  apiKey: "888888888888888888888888888888888888888",
  authDomain: "8888888888888888888888",
  databaseURL: "https://8888888.firebaseio.com",
  projectId: "88888888",
  storageBucket: "onelist-b577a.appspot.com",
  messagingSenderId: "888888888888",
  appId: "1:888888888888888888888888888888888888888",
  measurementId: "G-8888888888"
  /* apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGEING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID */
})

export const auth = app.auth();
export const db = app.firestore();
export default app;