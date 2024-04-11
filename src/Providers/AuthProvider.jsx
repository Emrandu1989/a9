import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import PropTypes from 'prop-types'; 

 const googleProvider = new GoogleAuthProvider(); 
 const gitHubProvider = new GithubAuthProvider();


export const AuthContext = createContext(null);
  

const AuthProvider = ({ children }) => {
    const  [user,setUser] = useState()

    const createUser =(email,password) =>{
         return  createUserWithEmailAndPassword(auth,email,password)
        

    }

    const login = (email,password) =>{
          return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
         return signOut(auth)
    }


      const googleLogin = () =>{
         return signInWithPopup(auth,googleProvider)
      }
      
      const gitHubLogin = () =>{
        return signInWithPopup(auth, gitHubProvider)
      }

     

      useEffect(()=>{
           const unsubscribe=  onAuthStateChanged(auth, currentUser =>{
                   setUser(currentUser);
                   console.log("currentUser",currentUser)
            })
            return ()=>{
                   unsubscribe()
            }
      },[])
      

    const authData = {
        user,
        createUser,
        login,
        logOut,
        googleLogin,
        gitHubLogin,

    }
    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}