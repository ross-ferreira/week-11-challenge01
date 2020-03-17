import React from "react";
import {
  BrowserRouter as Router, Route, Switch,} from "react-router-dom"; 
import Header from "./Header";
import WinnerBoard from './WinnerBoard'
import Button from './Button'
import ScoreHistory from "./ScoreHistory";
import Player1 from "./Player/Player1";
import Player2 from "./Player/Player2";


const App = ({player1Score,player2Score,handleIncrementP2,handleIncrementP1,handleIncrementR0,style,score}) => (
    <React.Fragment>
      <Router>
        <Header/>
          <Player1 exact path="/" player1Score={player1Score} style={style} handleIncrementP1={handleIncrementP1} player2Score={player2Score} style={style} handleIncrementP2={handleIncrementP2} />
          <Player2 exact path="/" player1Score={player1Score} style={style} handleIncrementP1={handleIncrementP1} player2Score={player2Score} style={style} handleIncrementP2={handleIncrementP2} />
          <br/>
          <WinnerBoard exact path="/" player1Score={player1Score} player2Score={player2Score} />
          <br/>
          <Button exact path="/" handleIncrementR0={handleIncrementR0} />
          <br/>
          <ScoreHistory exact path="/" score={score}/>
      </Router>


    </React.Fragment>
);

export default App;
