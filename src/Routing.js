import React from 'react';
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
          render={() => <p>Home</p>} 
        />
        <Route
          path="/about"
          render={() => <p>About</p>} 
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