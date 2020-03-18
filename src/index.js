import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
// import { createStore } from "redux";

//for REDUX LOCAL STORAGE
import { createStore, compose } from "redux";
import persistState from "redux-localstorage";
import store from './data/store';

// store.subscribe(() => {
//     let state = store.getState();
//       // for now, just log the new count
//     console.log(state.player1);
//     console.log(state.player2);
//     console.log(state.serving);
//     console.log(state.switchServer);
 
// });
const render = () => {
    let state = store.getState();
    // pass in state.value as a value prop
    ReactDOM.render(
    <App 
        player1Score={state.player1 } 
        player2Score={ state.player2 } 
        handleIncrementP1={ () => store.dispatch({ type: "INCREMENT_P1" }) }
        handleIncrementP2={ () => store.dispatch({ type: "INCREMENT_P2" }) }
        handleIncrementR0={ () => store.dispatch({ type: "RESET" }) }
        style={state.serving}
        score={state.score}
        />, 
    document.getElementById("root")
    ); };
    render();

    store.subscribe(render); // render when state changes render(); // render when page loads using initial state


