import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/Firebase.config";


export const AuthContent = createContext();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {

      const [user, setUser] = useState('');
      const [loading, setLoading] = useState(true);

      // sign in with google
      const googleLogin = () => {
            setLoading(true);
            return signInWithPopup(auth, googleProvider);
      }

      // SIgn in with github
      const githubLogin = () => {
            setLoading(true);
            return signInWithPopup(auth, githubProvider)
      }


      // create account 
      const createUser = (email, password) => {
            setLoading(true);
            return createUserWithEmailAndPassword(auth, email, password)
      }

      // update profile 
      const profileUpdate = (name, image) => {
            setLoading(true);
            return updateProfile(auth.currentUser, {
                  displayName: name,
                  photoURL: image
            })
      }

      // SIgn in with email & password
      const logIn = (email, password) => {
            setLoading(true);
            setLoading(true);
            return signInWithEmailAndPassword(auth, email, password);
      }

      // Log Out
      const LogOut = () => {
            setLoading(true);
            return signOut(auth);
      }



      // Observer
      useEffect(() => {
            const unSubscribe = onAuthStateChanged(auth, currentUser => {
                  setUser(currentUser)
                  setLoading(false);
            })

            return () => {
                  unSubscribe();
            }
      }, [])

      // value
      const authentication = {
            loading,
            googleLogin,
            user,
            githubLogin,
            createUser,
            profileUpdate,
            logIn,
            LogOut
      }

      return (
            <AuthContent.Provider value={authentication}>
                  {children}
            </AuthContent.Provider>
      );
};

AuthProvider.propTypes = {
      children: PropTypes.node
}

export default AuthProvider;