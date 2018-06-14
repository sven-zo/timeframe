import PropTypes from 'prop-types';
import React from 'react';
import './style.css';
import Menu from '../Menu';
import Arrive from '../Arrive';
import CardCarousel from '../CardCarousel';
import TrackingCode from '../TrackingCode';
import PackageInformation from '../PackageInformation';
import { Link } from 'react-router-dom';

const Home = ({ state }) => {
  // const { skeleton } = state.rootReducer.parcel;
  // const skeleton = state.rootReducer.parcel.skeleton;
  let { skeleton } = state.rootReducer.parcel;
  if (!skeleton) skeleton = false;
  return skeleton ? (
    <div className="home">
      <Menu skeleton />
      <CardCarousel skeleton />
      <Link to="/input">INPUT</Link>
    </div>
  ) : (
    <div className="home">
      <Menu skeleton={false} showBackButton backUrl="/" showHelpButton />
      <CardCarousel skeleton={false} parcel={state.rootReducer.parcel} />
      <Arrive signature />
      <TrackingCode />
      <PackageInformation parcel={state.rootReducer.parcel} />
    </div>
  );
};

Home.propTypes = {
  skeleton: PropTypes.bool,
};
Home.defaultProps = {
  skeleton: false,
};

export default Home;
