import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
        apiKey: "AIzaSyAX8iqPO0ErQd49L-KlPdOCyWkHSxY5ngg",
        authDomain: "dabin-react.firebaseapp.com",
        projectId: "dabin-react",
        storageBucket: "dabin-react.appspot.com",
        messagingSenderId: "272267822902",
        appId: "1:272267822902:web:e64aebec72f8ee03061597",
        measurementId: "G-R0BXMB8723"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export {firestore};