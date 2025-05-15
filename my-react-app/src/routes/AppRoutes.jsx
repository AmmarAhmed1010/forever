import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Collection from '../pages/Collection';
import Product from '../pages/Product';
import Contact from '../pages/Contact';
import About from '../pages/About';

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/collection" component={Collection} />
        <Route path="/product/:id" component={Product} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
};

export default AppRoutes;