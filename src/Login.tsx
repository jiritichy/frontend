import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "./UserContext";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const history = useHistory();
  const { username: usernameAlias, setUsername: setUsernameAlias } = useContext(
    UserContext
  );

  // TODO display login status in navbar
  // TODO if sessionID set, then redirect?
  // TODO put server globally somewhere
  const server = process.env.REACT_APP_API_SERVER;

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
      console.log("set sessionid");
      localStorage.setItem("sessionID", response.sessionID);
      setUsernameAlias(username);
      history.push("/");

      // TODO redirect to home
    } catch (err) {
      // TODO if it fails??
      console.log(err);
    }
  }

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
          {status.length > 0 && (
            <h5 className="mt-3 alert alert-danger">{status}</h5>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
