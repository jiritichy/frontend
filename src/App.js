import Header from './Header'
import Footer from './Footer'
import Login from './Login'
import Thread from './Thread'
import Register from './Register'
import Home from './Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/thread/:id'>
          <Thread />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router >
  );
}

export default App;
