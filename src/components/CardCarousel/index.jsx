import PropTypes from 'prop-types';
import React from 'react';
import Card from '../Card';
import './style.css';

const CardCarousel = ({ skeleton }) =>
  (skeleton ? (
    <div className="card-carousel card-carousel--center">
      <div className="card-loader" />
    </div>
  ) : (
    <div className="card-carousel">
      <Card />
      <Card />
      <Card />
    </div>
  ));

CardCarousel.propTypes = {
  skeleton: PropTypes.bool,
};
CardCarousel.defaultProps = {
  skeleton: true,
};

export default CardCarousel;
