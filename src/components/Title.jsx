import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Title.css';

export default class Title extends Component {
  render() {
    const { headline } = this.props;
    return (
      <div>
        <h2 className="page__text-font page__title-size">{ headline }</h2>
      </div>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.any,
}.isRequired;
