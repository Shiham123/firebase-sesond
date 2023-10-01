import { createContext, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
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

  const authInfo = { user, createUser, signInUser };

  return <AppContext.Provider value={authInfo}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
