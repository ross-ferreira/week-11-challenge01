import React, { Fragment } from "react";
import { HashRouter as Router, Route,Switch } from "react-router-dom";

import Header from "./Header";

import WinnerBoard from './WinnerBoard'

import Button from './Button'

import ScoreHistory from "./ScoreHistory";

import Player1 from "./Player/Player1";

import Player2 from "./Player/Player2";

import StartGame from "./StartGame";

import history from "../history";

import Loading from './Loading/component';


const App = () => (
    <Fragment>
      <Router history={ history }>
        <Header/>
        <Route path ="/game">
            <div class="players-cont">
              <Player1 class="score-display"/>
              <Player2 class="score-display"/>
            </div>
            <br/>
            <WinnerBoard />
            <br/>
            <Button />
            <br/>
            <ScoreHistory />
        </Route>
        <Route path= "/startgame">
              <StartGame/>
        </Route>
      </Router>
    </Fragment>
);

export default App;
