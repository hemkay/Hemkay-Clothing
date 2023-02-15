// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth, 
    GoogleAuthProvider, 
    signInWithPopup, 
    signInWithRedirect} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXBWqgjRQM2vc1OV77c1MnwRE_AO-IW58",
  authDomain: "hemkay-clothing-db.firebaseapp.com",
  projectId: "hemkay-clothing-db",
  storageBucket: "hemkay-clothing-db.appspot.com",
  messagingSenderId: "148660794481",
  appId: "1:148660794481:web:ac1474b8001e51760d17d0"
};


// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const docSnapshot = getDoc(userDocRef);
    if(!(await docSnapshot).exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch(error) {
            console.log(`error creating user ${displayName}`, error.message)
        }
    }

    return userDocRef;
};