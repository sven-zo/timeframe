import React from 'react';
import { requestPackage } from '../../state/actions';
import './style.css';
import Menu from '../Menu';
import packageIcon from './package-icon-anim.svg';
import nextButton from './next-button.svg';
import { formChange } from '../../state/actions';

const TrackingCodeForm = ({ store, history }) => {
  const clickHandler = () => {
    const p = store.getState().rootReducer.form;
    store.dispatch(requestPackage(p));
    history.push('/information');
  };

  const keypressHandler = (event) => {
    event.preventDefault();
    if (event.key === 'Enter') {
      clickHandler();
    }
  };

  const handleChange = (event) => {
    store.dispatch(formChange(event.target.value));
  };

  return (
    <div className="tracking-code-form">
      <Menu skeleton={false} />
      <img id="packageIcon" src={packageIcon} alt="" />
      <div className="milkyGlassBox">
        <h2>Please fill in your tracking code to continue.</h2>
        <input
          type="text"
          placeholder="000000000000"
          maxLength="14"
          value={store.form}
          onChange={handleChange}
        />
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
