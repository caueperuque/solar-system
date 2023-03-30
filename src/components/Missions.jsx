import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import './Missions.css';

export default class Missions extends Component {
  render() {
    return (
      <div data-testid="missions" className="missions__main-container">
        <article className="missions__container">
          <Title headline="MISSÕES" />
          <article className="missions__sub-container">
            {missions.map((mission) => (
              <MissionCard
                key={ mission.name }
                name={ mission.name }
                year={ mission.year }
                country={ mission.country }
                destination={ mission.destination }
              />))}
          </article>
        </article>
      </div>
    );
  }
}
