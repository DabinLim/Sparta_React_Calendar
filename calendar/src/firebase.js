//firebase.js
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAX8iqPO0ErQd49L-KlPdOCyWkHSxY5ngg",
    authDomain: "dabin-react.firebaseapp.com",
    projectId: "dabin-react",
    storageBucket: "dabin-react.appspot.com",
    messagingSenderId: "272267822902",
    appId: "1:272267822902:web:e64aebec72f8ee03061597",
    measurementId: "G-R0BXMB8723"
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };