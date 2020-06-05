import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAN6swIijhSyGkUXtjW0pcEXsd0-IcQXtA",
  authDomain: "crwn-db-409b3.firebaseapp.com",
  databaseURL: "https://crwn-db-409b3.firebaseio.com",
  projectId: "crwn-db-409b3",
  storageBucket: "crwn-db-409b3.appspot.com",
  messagingSenderId: "525593957667",
  appId: "1:525593957667:web:4576a28187dd8037f72896",
  measurementId: "G-MZZYB26JMV",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
