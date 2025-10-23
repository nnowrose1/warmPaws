import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        setLoading(true);
       return signInWithPopup(auth, googleProvider);
    }

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

      // get current user info
  useEffect(() => {
    // set/mount the observer
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log(currentUser);
        setUser(currentUser) ;
        setLoading(false) ;
    })
     // clear the observer
    return () => {
        unsubscribe();
    }
  }, [])

    const authInfo = {
    createUser,
    loading,
    user,
    setUser,
    logInUser,
    googleSignIn,
    resetPassword,
    logOut
    }
    return (
       <AuthContext value={authInfo}>
       { children}
       </AuthContext>
    );
};

export default AuthProvider;