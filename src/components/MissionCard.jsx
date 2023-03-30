import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MissionCard.css';

export default class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="mission__card">
        <p
          data-testid="mission-name"
          className="page__text-font missioncard__text-title missioncard__text-weight"
        >
          {name}
        </p>
        <div className="missioncard__container-info">
          <div className="missioncard__container-year-country">
            <p
              data-testid="mission-year"
              className="page__text-font missioncard__text-weight"
            >
              {year}
            </p>
            <p
              data-testid="mission-country"
              className="page__text-font missioncard__text-weight"
            >
              {country}
            </p>
          </div>
          <div className="mission__container-destination">
            <p
              data-testid="mission-destination"
              className="page__text-font missioncard__text-weight"
            >
              {destination}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  country: PropTypes.string,
  destination: PropTypes.string,
  name: PropTypes.string,
  year: PropTypes.number,
}.isRequired;
