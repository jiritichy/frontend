import { Link } from "react-router-dom";
import NavBarProfile from "./NavBarProfile";

const NavBar = () => {
  return (
    <div className="bg-dark navbar w-100 fixed-top">
      <Link to="/home">
        <h1 className="navbar-brand mx-3 text-light">TEMPORARYNAME</h1>
      </Link>

      <NavBarProfile />
    </div>
  );
};

export default NavBar;
