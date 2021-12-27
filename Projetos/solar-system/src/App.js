import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import planets from './data/planets';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem planets={ planets } />
        <Missions />
      </>
    );
  }
}

export default App;
