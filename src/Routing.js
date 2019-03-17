import React from 'react';
import Counter from "./components/Counter"
import store from "./redux/store"
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Routing = () => {
  const Links = () => (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
  return (
    <Router>
      <Links />
      <Switch>
        <Route
          path="/"
          exact
          component={Counter} 
        />
        <Route
          path="/about"
          component={Counter} 
        />
        <Route
          path="/contact"
          render={() => <p>Contact</p>} 
        />
      </Switch>
    </Router>
  )
};


export default Routing;