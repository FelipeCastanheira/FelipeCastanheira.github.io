import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map((mission) => {
          const { name, year, country, destination } = mission;
          return (<MissionCard
            name={ name }
            year={ year }
            country={ country }
            destination={ destination }
            key={ name }
          />);
        })}
      </div>
    );
  }
}

export default Missions;
