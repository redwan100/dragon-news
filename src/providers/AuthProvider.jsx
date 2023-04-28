import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";

const auth = getAuth(app)

export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email,password)
    }

    const userSignIn = (email,password)=>{
        return signInWithEmailAndPassword(auth, email,password)
    }

    const logOut = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, (loggedUser)=>{
            setUser(loggedUser)
        })

        return ()=>{
            unsubscribe()
        }
    },[])
    
    const userInfo ={
        user,
        createUser,
        userSignIn,
        logOut,
    }
  return (
    <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider