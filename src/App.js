import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import Home from './Home';
import Tryunfo from './tryunfo/Tryunfo';
import SolarSystem from './solar-system/SolarSystem';

class App extends React.Component {
  render() {
    
    return (
      <Router>
        <Switch>
          <Route exact path="/tryunfo" element={ <Tryunfo /> } />
          <Route exact path="/solarsystem" element={ <SolarSystem /> } />
          <Route exact path="/" element={ <Home /> } />
        </Switch>
      </Router>
    );
  }
}

export default App;
