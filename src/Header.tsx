import NavBar from "./NavBar";
import { createContext, useState } from "react";

// interface UserContextType {
//   username: string | null;
//   setUsername: React.Dispatch<React.SetStateAction<string>>;
// }

const Header = () => {
  return (
    <div>
      <NavBar />
    </div>
  );
};

export default Header;
