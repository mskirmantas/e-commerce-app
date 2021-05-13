import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBmj8ti1lp9QgbYsibyUkBlJ39d-emi6_o",
    authDomain: "e-commerce-app-db-34669.firebaseapp.com",
    projectId: "e-commerce-app-db-34669",
    storageBucket: "e-commerce-app-db-34669.appspot.com",
    messagingSenderId: "330247329708",
    appId: "1:330247329708:web:5159bb7cb55928e80fcc09",
    measurementId: "G-S60S0CWDHC"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;