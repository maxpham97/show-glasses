// Import necessary Firebase modules
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB2dpQqDx5-gG-uFZOJWUuqEhu2nn4Srw0',
  authDomain: 'show-glasses.firebaseapp.com',
  projectId: 'show-glasses',
  storageBucket: 'show-glasses.appspot.com',
  messagingSenderId: '96762805372',
  appId: '1:96762805372:web:c05b23d884f52879ff9df9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';

const provider = new GoogleAuthProvider();

export const signInGoogle = () =>
  signInWithPopup(auth, provider)
    .then((res) => {
      if (res.user.displayName) return res.user.displayName;
    })
    .catch((e) => console.log(e));
