import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyD8Q1ZycYYm9NrO92I0Ucu7IwS2FBgQKdk",
  authDomain: "crwn-clothing-db-3216f.firebaseapp.com",
  projectId: "crwn-clothing-db-3216f",
  storageBucket: "crwn-clothing-db-3216f.appspot.com",
  messagingSenderId: "1030473490744",
  appId: "1:1030473490744:web:5353991c7a37c00e1ae1cd"
};


const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);