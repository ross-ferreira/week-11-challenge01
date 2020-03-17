import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { createStore } from "redux";

//for REDUX LOCAL STORAGE
import { createStore, compose } from "redux";
import persistState from "redux-localstorage";
//

const initial = {
    player1: 0,
    player2: 0,
    serving: "player1",
    switchServer:0,
    score:[{
            player_1: {
                score: 21,
                won: true
            },
        
            player_2: {
                score: 17,
                won: false
            }
        }
    ],
};

const player1 = state => ({ ...state, player1: state.player1 + 1 });
const player2 = state => ({ ...state, player2: state.player2 + 1 });
const server = state => ({ ...state, switchServer: (state.player1+state.player2) % 5 === 0 ? state.switchServer + 1 : state.switchServer});
const serving = state => ({ ...state, serving: state.switchServer % 2 !== 0 ? "player2": "player1"});
const scoring = (state,initial) => {
    const newScore = [
        ...state.score,
        {
            player_1:{
                score:state.player1,
                won: (state.player1 > state.player2 ? true:false)
            },
            player_2:{
                score:state.player2,
                won: (state.player2 > state.player1 ? true:false)
            },
        }
    ];
    return {
        ...initial,
        score:newScore,
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT_P1": return serving(server(player1(state)));;;
        case "INCREMENT_P2": return serving(server(player2(state)));;;
        case "RESET": return scoring(state,initial);  
        default: return state;
 } };

//Made changes to store for allowing page refresh without resetting state
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

const store = createStore(
    reducer, 
    initial,
    composeEnhancers(persistState())
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

 // subscribe to any changes
store.subscribe(() => {
    let state = store.getState();
      // for now, just log the new count
    console.log(state.player1);
    console.log(state.player2);
    console.log(state.serving);
    console.log(state.switchServer);
 
});
    
// we update subscribe to call the ReactDOM.render // method whenever the state changes
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


