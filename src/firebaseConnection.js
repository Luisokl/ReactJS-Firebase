import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDG1Si-Iu7VsOuUvqq8kLEenqiT7kZMmjQ",
    authDomain: "curso-d0249.firebaseapp.com",
    projectId: "curso-d0249",
    storageBucket: "curso-d0249.appspot.com",
    messagingSenderId: "959553947611",
    appId: "1:959553947611:web:26971630b9f44fb243c9fe",
    measurementId: "G-GZZQ6FG30X"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };