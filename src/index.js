import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Count Reducer
const count = (state = 0, action) => {

  if (action.type == 'INCREASE') {
    console.log("clicked increase!")
    return state + 1;
  }
  if (action.type == 'DECREASE') {
    console.log("clicked decrease!")
    return state - 1;
  }
  return state;
}

const tacoCatCount = (state = 100, action) => {
  console.log("inside of tacoCatCount")
  if (action.type == 'TACOCAT_INCREASE') {
    console.log("clicked tacocat increase!")
    return state + 1;
  }
  if (action.type == 'TACOCAT_DECREASE') {
    console.log("clicked tacocat decrease!")
    return state - 1;
  }

  return state;
}

// Element Reducer
const elementList = (state = ['TacoCataminium'], action) => {
  console.log("in Elementlist()", action)
  if (action.type === 'ADD_ELEMENT') {
    // I want to add the new element to the state
    // using spread operator so we don't mutate state (creates a new array with the action.payoload added onto the end.  .push would mutate.  .concat would work but likely has a performance drop, and not recommended for redux)
    return [...state, action.payload]
  }
  return state;
}


// Store for keeping our global state
// adding count into the createStore since we want all the reducers to coexist in the same store
const storeInstance = createStore(
  // all reducers will go here
  combineReducers({
    count,
    elementList,
    tacoCatCount
  }),
  // applyMiddleware(
  //   logger
  // )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Provider lets redux and react communicate */}
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>
);

