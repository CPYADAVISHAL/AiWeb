import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBQMe_R87ZvmwVxFqJ2Y2WXUxVI8wxf8sQ",
  authDomain: "reactfirebase-9a959.firebaseapp.com",
  projectId: "reactfirebase-9a959",
  storageBucket: "reactfirebase-9a959.appspot.com",
  messagingSenderId: "628405043716",
  appId: "1:628405043716:web:43e10f41ae4dd3d6182b51",
  measurementId: "G-TTV5TNJWWN",
  databaseURL: "https://reactfirebase-9a959-default-rtdb.firebaseio.com",
};
  
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);
 const FirebaseContext = createContext(null);
 export const useFirebase = () => useContext(FirebaseContext);
export const FirebaseProvider = (props) => {
  const signupWithEmailAndPassword = (email, password) => {

    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  const putData = (key, data) => set(ref(database, key), data);
return (
  <FirebaseContext.Provider
   value={(signupWithEmailAndPassword, putData)}>
    {props.children}
  </FirebaseContext.Provider>
);
};
