import React from 'react';
import { Link } from 'react-router-dom';
import { requestPackage } from '../../state/actions';
import './style.css';
import Menu from '../Menu';
import packageIcon from './package-icon-anim.svg';
import nextButton from './next-button.svg';

const TrackingCodeForm = ({ store, history }) => {
  const clickHandler = () => {
    const packageID = window.prompt('PACKAGE ID?');
    store.dispatch(requestPackage(packageID));
    history.push('/information');
  };

  const keypressHandler = (event) => {
    event.preventDefault();
    if (event.key === 'Enter') {
      clickHandler();
    }
  };

  return (
    <div className="tracking-code-form">
      <Menu skeleton={false} />
      <img id="packageIcon" src={packageIcon} alt="" />
      <div className="milkyGlassBox">
        <h2>Please fill in your tracking code to continue.</h2>
        <input type="text" placeholder="DT000000000000" maxLength="14" />
        <p>Tracking code</p>
        <div className="nextButton">
          <button onClick={clickHandler} onKeyPress={keypressHandler}>
            <img src={nextButton} alt="next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrackingCodeForm;
