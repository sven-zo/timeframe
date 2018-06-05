import PropTypes from 'prop-types';
import React from 'react';
import './style.css';
import Menu from '../Menu';
import Arrive from '../Arrive';
import CardCarousel from '../CardCarousel';
import TrackingCode from '../TrackingCode';
import PackageInformation from '../PackageInformation';

const Home = ({ skeleton }) =>
  (skeleton ? (
    <div className="home">
      <Menu skeleton />
      <CardCarousel skeleton />
    </div>
  ) : (
    <div className="home">
      <Menu skeleton={false} showBackButton />
      <CardCarousel skeleton={false} />
      <Arrive signature />
      <TrackingCode />
      <PackageInformation />
    </div>
  ));

Home.propTypes = {
  skeleton: PropTypes.bool,
};
Home.defaultProps = {
  skeleton: false,
};

export default Home;
