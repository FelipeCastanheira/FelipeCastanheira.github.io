import React from 'react';
// import PropTypes from 'prop-types';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {planets.map((planet) => {
          const { name, image } = planet;
          return <PlanetCard planetName={ name } planetImage={ image } key={ name } />;
        })}
      </div>
    );
  }
}

export default SolarSystem;
