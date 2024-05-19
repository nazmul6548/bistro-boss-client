import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
// import auth from "../../firebase/firebase.config";
// import { toast } from "react-toastify";
import { GoogleAuthProvider } from "firebase/auth";
import auth from "./firebase.config";


export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loader,setLoader] = useState(true);
    const [reload,setReload] =useState(false)

    const createUser = (email,password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const userUpdateProfile = (name,image)=>{
        
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
          })
    }
   

    const login = (email, password) => {
        setLoader(true)
       return signInWithEmailAndPassword(auth, email, password)
    }

    const googlelogin = () => {
        setLoader(true)
         return signInWithPopup(auth, googleProvider)
         
    }
    const logout = () => {
        setLoader(true)
        setUser(null)
        signOut(auth)
    }

    useEffect(()=>{
        const unsubscrive =onAuthStateChanged(auth, (user) => {
            // if (user) {
                getAuth()
            setUser(user)
            // console.log(user);
            setLoader(false)
             
            // }
          });
          return () => unsubscrive();
       },[])


    const allvalue = {user,loader,setReload,createUser,login,googlelogin,logout,userUpdateProfile}
    return (
        <div>
        <AuthContext.Provider value={allvalue}>
         {children}
        </AuthContext.Provider>
        {/* <ToastContainer></ToastContainer> */}
     </div>
    );
};

export default AuthProvider;