import { createContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const appInfo = { name: 'person one' };

  return <AppContext.Provider value={appInfo}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
