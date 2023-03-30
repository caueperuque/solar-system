import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card">
        <p data-testid="mission-name" className="page__text-font">{ name }</p>
        <p data-testid="mission-year" className="page__text-font">{ year }</p>
        <p data-testid="mission-country" className="page__text-font">{ country }</p>
        <p data-testid="mission-destination" className="page__text-font">
          { destination }
        </p>
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
