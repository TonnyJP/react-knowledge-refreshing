import React from "react";

const AppContext = React.createContext();

export const useAppContext = () => React.useContext(AppContext);

const AppContextProvider = ({children}) => {
    const [ name, setName ] = React.useState("Tonny");

    return (
      <AppContext.Provider value={{name, setName}}>
         {children}
       </AppContext.Provider>
    )
}

export default AppContextProvider;