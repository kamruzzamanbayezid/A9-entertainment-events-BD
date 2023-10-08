import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import auth from "../Firebase/Firebase.config";

export const AuthContent = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

      const [user, setUser] = useState('');

      // sign in with google
      const googleLogin = () => {
            return signInWithPopup(auth, googleProvider);
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