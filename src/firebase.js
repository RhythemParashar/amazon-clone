import firebase from 'firebase';

const firebaseConfig = {
    // paste your api keys here, which are found in firebase console.
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
