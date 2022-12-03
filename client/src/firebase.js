//reference : https://blog.logrocket.com/user-authentication-firebase-react-apps/

import { initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth,
    onAuthStateChanged,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut
} from 'firebase/auth';

import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA4vZL_Vv8VSxZogM1TseEzCHmru0btNXo",
    authDomain: "ctp-groupproject.firebaseapp.com",
    projectId: "ctp-groupproject",
    storageBucket: "ctp-groupproject.appspot.com",
    messagingSenderId: "298142725946",
    appId: "1:298142725946:web:1d29d5273712b222ec4203",
    measurementId: "G-X7HLEGC7YZ"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

onAuthStateChanged(auth, user => console.log(user));
//Using google auth to log in if it fails catch block will catch
//checks database to see if user is registered if not it makes a new record
//all done through firebase
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db,'users'), where ('uid','==', user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0){
            await addDoc(collection(db, 'users'), {
                uid: user.uid,
                name: user.displayName,
                authProvider: 'google',
                email:user.email
            });
        }
    } catch (err){
        console.error(err);
        alert(err.message);
    }
};


const logInWithEmailAndPassword = async(email, password) => {
    try {
        await signInWithEmailAndPassword(auth,email,password);
        console.log('SUCCESS LOGIN');
    } catch(err){
        console.error(err);
        alert(err.message);
    }
};

//creating new user
//inserts new data into database -> no need to check database since its a new user
const registerWithEmailAndPassword = async(name, email, password) =>{
    try {
        const res = await createUserWithEmailAndPassword(auth, email,password);
        const user = res.user;
        await addDoc(collection(db,'user'),{
            uid: user.uid,
            name,
            authProvider: 'local',
            email
        });
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
}

//PasswordReset
//pasing email in await
const sendPasswordReset = async(email) =>{
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

//logout funciton
const logout = () => {
    signOut(auth);
};




export{
    auth,
    db,
    getAuth,
    onAuthStateChanged,
    signInWithGoogle,
    signInWithEmailAndPassword,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordResetEmail,
    sendPasswordReset,
    logout
};