import { combineReducers } from 'redux';
import { PACKAGE_FETCH_SUCCESS } from '../actions';

function info(state = 'timeframe', action) {
  switch (action.type) {
    default:
      return state;
  }
}

function parcel(state = { skeleton: true, package: {} }, action) {
  switch (action.type) {
    case PACKAGE_FETCH_SUCCESS:
      return { ...state, skeleton: false, package: action.payload };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  info,
  parcel,
});

export default rootReducer;
