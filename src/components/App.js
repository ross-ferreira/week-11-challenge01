import React from "react";
// import {
//   BrowserRouter as Router, Route, Switch,} from "react-router-dom"; 
import {Router,Route} from "react-router-dom"; 
import Header from "./Header";
import WinnerBoard from './WinnerBoard'
import Button from './Button'
import ScoreHistory from "./ScoreHistory";
import Player1 from "./Player/Player1";
import Player2 from "./Player/Player2";
import StartGame from "./StartGame";
import history from "../history";


const App = () => (
    <React.Fragment>
      <Router history={ history }>
        <Header/>
        <Route exact path="/">
            <Player1/>
            <Player2/>
            <br/>
            <WinnerBoard />
            <br/>
            <Button />
            <br/>
            <ScoreHistory />
          </Route>
          <Route exact path= "/startgame">
            <StartGame/>
          </Route>
      </Router>
    </React.Fragment>
);

export default App;
