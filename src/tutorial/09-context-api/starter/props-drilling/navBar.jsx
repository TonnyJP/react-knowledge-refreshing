import React from "react";
import NavLinks from "./navLinks";

const NavBar = () => {
  const [user, setUser] = React.useState({ name: "Tonny", age: 55 });

  const logout = () => {
    setUser({ name: "", age: 0 });
  };
  return (
    <nav className="navbar">
      <h5>Context API</h5>
      <NavLinks user={user} logout={logout} />
    </nav>
  );
};

export default NavBar;
