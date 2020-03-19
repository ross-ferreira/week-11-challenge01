import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import {Provider} from "react-redux";

import App from './components/App';

import store from './data/store';

//Now that REACT REDUX is installed lets add {Provider}


// store.subscribe(() => {
//     let state = store.getState();
//       // for now, just log the new count
//     console.log(state.player1);
//     console.log(state.player2);
//     console.log(state.serving);
//     console.log(state.switchServer);
 
// });

let state = store.getState();
    // pass in state.value as a value prop
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById("root")
);
 


