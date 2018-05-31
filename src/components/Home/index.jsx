import React from 'react';
import './style.css';
import Menu from '../Menu';
import Arrive from '../Arrive';
import CardCarousel from '../CardCarousel';
import TrackingCode from '../TrackingCode';
import PackageInformation from '../PackageInformation';

const Home = () => (
  <div className="home">
    <Menu skeleton={false} showBackButton />
    <CardCarousel skeleton={false} />
    <Arrive signature />
    <TrackingCode />
    <PackageInformation />
  </div>
);

export default Home;
