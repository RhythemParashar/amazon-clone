import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyArawrX7xLFhUc1itZcNSTWi8GODCy9ULU",
    authDomain: "clone-87109.firebaseapp.com",
    databaseURL: "https://clone-87109.firebaseio.com",
    projectId: "clone-87109",
    storageBucket: "clone-87109.appspot.com",
    messagingSenderId: "72201518952",
    appId: "1:72201518952:web:dc7e07ace987cd951d60dd",
    measurementId: "G-BHXKLN0V5X"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };