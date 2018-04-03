import { combineReducers } from 'redux';


function info(state = 'timeframe', action) {
  switch (action.type) {
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  info,
});

export default rootReducer;
