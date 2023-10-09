import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/Firebase.config";


export const AuthContent = createContext();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {

      const [user, setUser] = useState('');

      // sign in with google
      const googleLogin = () => {
            return signInWithPopup(auth, googleProvider);
      }

      // SIgn in with github
      const githubLogin = () => {
            return signInWithPopup(auth, githubProvider)
      }


      // create account 
      const createUser = (email, password) => {
            return createUserWithEmailAndPassword(auth, email, password)
      }

      // update profile 
      const profileUpdate = (name, image) => {
            return updateProfile(auth.currentUser, {
                  displayName: name,
                  photoURL: image
            })
      }

      // SIgn in with email & password
      const logIn = (email, password) => {
            return signInWithEmailAndPassword(auth, email, password);
      }

      // Log Out
      const LogOut = () => {
            return signOut(auth);
      }



      // Observer
      useEffect(() => {
            const unSubscribe = onAuthStateChanged(auth, currentUser => {
                  setUser(currentUser)
            })

            return () => {
                  unSubscribe();
            }
      }, [])

      console.log('Current User', user);

      // value
      const authentication = {
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