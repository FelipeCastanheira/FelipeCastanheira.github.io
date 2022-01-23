import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    // O componente PlanetCard deve receber duas props: uma chamada planetName e outra chamada planetImage.
    const { planetName, planetImage } = this.props;
    const altImage = `Planeta ${planetName}`;
    return (
      <div data-testid="planet-card">
        <h3 data-testid="planet-name">{planetName}</h3>
        <img src={ planetImage } alt={ altImage } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetImage: PropTypes.string.isRequired,
  planetName: PropTypes.string.isRequired,
};

export default PlanetCard;
