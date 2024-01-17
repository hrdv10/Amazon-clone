// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBv20hD7_m4oOJmBTngGFYtRrHR1V_YdDo",
    authDomain: "clone-78506.firebaseapp.com",
    projectId: "clone-78506",
    storageBucket: "clone-78506.appspot.com",
    messagingSenderId: "111265424975",
    appId: "1:111265424975:web:c6004cb5ef7917f24b6c3a",
    measurementId: "G-4LZ0RT96C3"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };