import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MissionCard.css';
import Flag from '../images/flag.png';
import Loc from '../images/loc.png';
import Calendar from '../images/calendar.png';

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
        <hr />
        <div className="missioncard__container-info missioncard__teste">
          <div className="missioncard__container-year-country">
            <div className="missioncard_image-teste">
              <img src={ Calendar } className="missioncard_image-flag" alt="" />
              <p
                data-testid="mission-year"
                className="page__text-font missioncard__text-weight"
              >
                {year}
              </p>
            </div>
            <div className="missioncard_image-teste">
              <img src={ Loc } className="missioncard_image-flag" alt="" />
              <p
                data-testid="mission-country"
                className="page__text-font missioncard__text-weight"
              >
                {country}
              </p>
            </div>
          </div>
          <div className="mission__container-destination">
            <img src={ Flag } className="missioncard_image-flag" alt="" />
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
