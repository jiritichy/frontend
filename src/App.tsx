import Header from "./Boiler/Header";
import Footer from "./Boiler/Footer";
import Login from "./UserAuth/Login";
import Thread from "./Thread/Thread";
import Register from "./UserAuth/Register";
import Home from "./Home/Home";
import { useState } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { UserContext } from "./Home/UserContext";
import { PostContext } from "./Home/PostContext";

function App() {
  const [username, setUsername] = useState("");
  const [postToReload, setPostToReload] = useState<string | null>(null);
  const [deletedPost, setDeletedPost] = useState<string | null>(null);

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
            <PostContext.Provider
              value={{
                voteReload: [postToReload, setPostToReload],
                deleteReload: [deletedPost, setDeletedPost],
              }}
            >
              <Thread />
            </PostContext.Provider>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
