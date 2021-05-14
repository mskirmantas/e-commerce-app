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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;