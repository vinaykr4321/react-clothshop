import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAR7oSaPyYHSl30PNuOUFBIi7IIDpvUhFg",
    authDomain: "my-eccomerce.firebaseapp.com",
    databaseURL: "https://my-eccomerce.firebaseio.com",
    projectId: "my-eccomerce",
    storageBucket: "my-eccomerce.appspot.com",
    messagingSenderId: "458256872854",
    appId: "1:458256872854:web:352ad999be64dd3c2e19b7",
    measurementId: "G-GJ6582GF3H"
};



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;