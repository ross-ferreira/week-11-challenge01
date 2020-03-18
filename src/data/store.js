import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
// import { createStore } from "redux";

//for REDUX LOCAL STORAGE
import { createStore, compose } from "redux";
import persistState from "redux-localstorage";
//

import initial from './initial';
import reducer from './reducer'; 

//Made changes to store for allowing page refresh without resetting state
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

export default createStore(
    reducer, 
    initial,
    composeEnhancers(persistState())
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

 // subscribe to any changes






