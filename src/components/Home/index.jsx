import React from 'react';
import './style.css';
import Menu from '../Menu';
import Time from '../Time';
import Arrive from '../Arrive';

const Home = () => (
  <div className="home">
    <Menu skeleton={false} />
    <Time skeleton={false} />
    <Arrive signature />
  </div>
);

export default Home;
