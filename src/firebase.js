import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDG_ZyjfA7Z6CuiJ0fZ0qIg1ZUoDNJoT6g",
    authDomain: "spotify-clone-ee7d9.firebaseapp.com",
    projectId: "spotify-clone-ee7d9",
    storageBucket: "spotify-clone-ee7d9.appspot.com",
    messagingSenderId: "798097488582",
    appId: "1:798097488582:web:db75ab5e6b5e5e17b3b5c7",
    measurementId: "G-8K7VWC18L7"
};


// init app
const firebaseApp = firebase.initializeApp(firebaseConfig)
// grab firestore
const db = firebaseApp.firestore();
// get auth ready 
const auth = firebase.auth()

// export db, auth so react component can use it 
export { db, auth }