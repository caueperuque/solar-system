import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PlanetCard.css';

export default class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <img
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
          className={ `systemsolar__${planetName} planetcard__planets` }
        />
        <p
          data-testid="planet-name"
          className="page__text-font planetcard__text-center planetcard__text-weight"
        >
          { planetName }
        </p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetImage: PropTypes.string,
  planetName: PropTypes.string,
}.isRequired;
