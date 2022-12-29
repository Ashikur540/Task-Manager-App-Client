import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useReducer, useState } from 'react';
import app from "../Firebase/config";
import { initialState, reducer } from "./Advertise";



export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    // advertise
    const [state, dispatch] = useReducer(reducer, initialState)



    // 

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logoutUser = () => {
        setLoading(true);
        localStorage.removeItem('autohunt-token');
        return signOut(auth);
    }

    const googleSignin = (googleProvider) => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }


    useEffect(() => {
        const unmount = onAuthStateChanged(auth, currentUser => {
            console.log("state changed", currentUser);
            setUser(currentUser);
            setLoading(false);
        })

        return () => {
            unmount();
        }
    }, [])

    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo);
    }


    const authInfo = {
        user,
        loading,
        createUser,
        updateUser,
        loginUser,
        logoutUser,
        googleSignin,
        state, dispatch

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider