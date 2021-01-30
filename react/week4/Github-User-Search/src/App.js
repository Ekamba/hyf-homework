import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import User from "./components/users/User";
import GithubState from "./context/github/GithubState";

const App = () => {
  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar title="Github user searcher" icon="fab fa-github" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/user/:login" component={User} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
