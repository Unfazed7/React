import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="./Home" component={Home} />
        <Route path="./About" component={About} />
        <Route path="./Contact" component={Contact} />
      </Switch>
    </Router>
  );
};

export default App;
