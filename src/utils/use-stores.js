import React from 'react';
import stores from '../stores';

const StoresContext = React.createContext({
  ...stores
});

export const useStores = () => (
  React.useContext(StoresContext)
);

export const StoreProvider = ({children}) => {
  return <StoresContext.Provider value={{...stores}}>{children}</StoresContext.Provider>
};
