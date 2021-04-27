import { Link } from "react-router-dom";
import NavBarProfile from "./NavBarProfile";

const NavBar = () => {
  /** Returns where the home button should redirect to. */
  function allowedUrl(): string {
    if (localStorage.getItem("sessionID") === null) {
      return "#";
    }
    return "/home";
  }
  return (
    <div className="bg-dark navbar w-100 static-top">
      <Link to={allowedUrl}>
        <h1 className="navbar-brand mx-3 text-light">
          Temporary name for social media website
        </h1>
      </Link>

      <NavBarProfile />
    </div>
  );
};

export default NavBar;
