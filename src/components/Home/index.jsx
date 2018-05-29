import React from 'react';
import './style.css';
import Menu from '../Menu';
import Time from '../Time';
import Arrive from '../Arrive';
import CardCarousel from '../CardCarousel';
import TrackingCode from '../TrackingCode';

const Home = () => (
  <div className="home">
    <Menu skeleton={false} />
    <CardCarousel skeleton={false} />
    <Arrive signature />
    <TrackingCode></TrackingCode>
  </div>
);

export default Home;
