// apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
// authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,


import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDvqKFv6daUIydLqf1ZdufziKDsvmJlYBY",
  authDomain: "recochoku-5be7f.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider().addScope('https://www.googleapis.com/auth/calendar.readonly');

// Google Calendar API を使用する場合はこのスコープを追加する。
// export const provider = new GoogleAuthProvider().addScope("https://www.googleapis.com/auth/calendar.settings.readonly");
