import { createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import globalAuth from '../firebase/firebase.config';

const AppContext = createContext();
const googleAuthProvider = new GoogleAuthProvider();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(globalAuth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(globalAuth, email, password);
  };

  const signInWithGoogle = () => {
    return signInWithPopup(globalAuth, googleAuthProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(globalAuth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(globalAuth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    signInUser,
    logOut,
    loading,
    signInWithGoogle,
  };

  return <AppContext.Provider value={authInfo}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
