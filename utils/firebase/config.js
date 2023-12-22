import firebase from 'firebase/compat/app'
import 'firebase/compat/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFlj0GKD-gfNFjBfqkCR8KfUydgbm0DoU",
    authDomain: "woa-server.firebaseapp.com",
    projectId: "woa-server",
    storageBucket: "woa-server.appspot.com",
    messagingSenderId: "655671503368",
    appId: "1:655671503368:web:45149a69ad5c1ee7bdffbd"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };