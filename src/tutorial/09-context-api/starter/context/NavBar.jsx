import React from "react";
import NavLinks from "./navLinks";

export const NavBarContext = React.createContext(); // you can provide an initial value of needed
//custom hook
export const useAppContext = () => React.useContext(NavBarContext);

const NavBar = () => {
  const [user, setUser] = React.useState({ name: "Tonny", age: 55 });

  const logout = () => {
    setUser({ name: "", age: 0 });
  };
  const value = {
    user,
    logout
  }
  return (
    <NavBarContext.Provider value={value}>
      <nav className="navbar">
        <h5>Context API</h5>
        <NavLinks/>
      </nav>
    </NavBarContext.Provider>
  );
};

export default NavBar;