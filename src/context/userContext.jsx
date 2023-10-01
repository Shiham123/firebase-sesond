import { createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import globalAuth from '../firebase/firebase.config';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(globalAuth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(globalAuth, email, password);
  };

  const logOut = () => {
    return signOut(globalAuth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(globalAuth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = { user, createUser, signInUser, logOut };

  return <AppContext.Provider value={authInfo}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
