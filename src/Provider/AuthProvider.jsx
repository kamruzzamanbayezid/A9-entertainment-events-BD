import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from "firebase/auth";
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

      // Log Out
      const LogOut = () => {
            return signOut(auth);
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