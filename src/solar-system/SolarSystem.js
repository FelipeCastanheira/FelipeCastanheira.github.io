import React from 'react';
import Header from './components/Header';
import Universe from './components/Universe';
import Missions from './components/Missions';
import planets from './data/planets';
import './App.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Universe planets={ planets } />
        <Missions />
      </>
    );
  }
}

export default SolarSystem;
