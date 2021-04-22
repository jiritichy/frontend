import { useContext } from "react";
import { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { UserContext } from "./UserContext";

const NavBarProfile = () => {
  const server = process.env.REACT_APP_API_SERVER;
  const { username, setUsername } = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();

  async function getUsername() {
    const sessionID = localStorage.getItem("sessionID");
    console.log(location.pathname);
    console.log();
    try {
      const result = await fetch(server + "getUsername/" + sessionID);
      const jsoned = await result.json();
      // redirect to login if not logged in
      if (
        !jsoned.username &&
        !["/login", "/register"].includes(location.pathname)
      ) {
        history.push("/login");
        return;
      }
      setUsername(jsoned.username);
    } catch (error) {
      history.push("/login");
      // TODO
    }
  }

  useEffect(() => {
    getUsername();
  }, []);

  /** Logs the user out. */
  function logout() {
    localStorage.removeItem("sessionID");
    setUsername("");
  }

  /** Render logout button if logged in */
  function renderLogoutConditionally() {
    // if logged in
    if (username && username.length > 0) {
      return <h5 className="text-primary">logout</h5>;
    }

    if (location.pathname === "/register") {
      return <h5>Login</h5>;
    }
  }

  /** Render Register button if not logged in */
  function renderRegister() {
    if (location.pathname === "/register") {
      return;
    }

    // if logged out and not on register page
    if (!username) {
      return <h5 className="font-weight-bold">Register</h5>;
    }
  }

  return (
    <div>
      <h6 className="text-white">{username}</h6>
      <div className="d-flex flex-row">
        <Link className="mr-3" to="/login" onClick={logout}>
          {renderLogoutConditionally()}
        </Link>
        <Link to="/register">{renderRegister()}</Link>
      </div>
    </div>
  );
};

export default NavBarProfile;
