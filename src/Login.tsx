import React, { useState, useContext, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { UserContext } from "./UserContext";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const history = useHistory();
  const usernameAlias = useContext(UserContext).username;
  const setUsernameAlias = useContext(UserContext).setUsername;

  const server = process.env.REACT_APP_API_SERVER;

  /** Logs the user in. */
  async function login(e: React.MouseEvent) {
    e.preventDefault();

    const obj = {
      username: username,
      password: password,
    };

    // send off to server
    const url = server + "login";
    try {
      const result = await fetch(url, {
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      const response = await result.json();

      if (response.hasOwnProperty("error")) {
        setStatus(response.error);
        return;
      }
      localStorage.setItem("sessionID", response.sessionID);

      // username already used locally, so need different var name
      setUsernameAlias(username);
      history.push("/home");
    } catch (err) {
      setStatus("Failed to login. Please try again.");
    }
  }

  useEffect(() => {
    // log user out if visit the page while logged in
    if (usernameAlias) {
      localStorage.removeItem("sessionID");
      setUsernameAlias("");
      setUsername("");
    }
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-8 offset-sm-2 col-xl-6 offset-xl-3">
          <form className="mt-5">
            <h1 className="mb-4 text-center">Login</h1>
            <div className="form-group mb-2">
              <label>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-control"
                placeholder="Enter username"
              />
            </div>
            <div className="form-group mb-3">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <button type="submit" onClick={login} className="btn btn-primary">
              Submit
            </button>
          </form>
          <Link to="/register">
            <div className="mt-1">New user? Click here to register!</div>
          </Link>
          {status.length > 0 && (
            <h5 className="mt-3 alert alert-danger">{status}</h5>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
