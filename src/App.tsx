import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import Thread from "./Thread";
import Register from "./Register";
import Home from "./Home";
import { useState } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { UserContext } from "./UserContext";

function App() {
  const [username, setUsername] = useState("");

  return (
    <Router basename="/">
      <UserContext.Provider value={{ username, setUsername }}>
        <Header />
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/thread/:id">
            <Thread />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
