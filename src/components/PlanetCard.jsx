import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PlanetCard.css';

export default class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name" className="page__text-font">
          { planetName }
        </p>
        <img
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
          className={ `systemsolar__${planetName}` }
        />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetImage: PropTypes.string,
  planetName: PropTypes.string,
}.isRequired;
