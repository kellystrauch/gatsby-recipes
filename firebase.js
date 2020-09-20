import firebase from "firebase/app"
import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyDfbeFKgU2p47RgA5s0DmBanZz_ZH_q_a8",
    authDomain: "website-comments-db7f2.firebaseapp.com",
    databaseURL: "https://website-comments-db7f2.firebaseio.com",
    projectId: "website-comments-db7f2",
    storageBucket: "website-comments-db7f2.appspot.com",
    messagingSenderId: "750617250037",
    appId: "1:750617250037:web:f5b056d08621b315b0ddbc"
  };

firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()

export default firebase