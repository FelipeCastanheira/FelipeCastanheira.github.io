import React from 'react';
import Header from './components/Header';
import Universe from './components/Universe';
import Missions from './components/Missions';
import planets from './data/planets';
import style from './style.module.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <main className={ style.solarsystem }>
        <Header />
        <Universe planets={ planets } />
        <Missions />
      </main>
    );
  }
}

export default SolarSystem;
