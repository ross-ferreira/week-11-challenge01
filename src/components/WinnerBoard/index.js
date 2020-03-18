import {connect} from "react-redux";

import WinnerBoard from './component';

const mapStateToProps= (state) => {
  let player1Score = state.player1;
  let player2Score = state.player2;

  return { 
    winner1: (player1Score + player2Score)===21 
      && (player1Score > player2Score) 
      && (player1Score > (player2Score +2)) ? "Player 1 wins!" :null,
    winner2: (player1Score + player2Score)===21 
      && (player2Score > player1Score) 
      && (player2Score > (player1Score +2)) ? "Player 2 wins!" :null, 
  };
}

export default  connect(mapStateToProps)(WinnerBoard);

// state here is a global state with all properties
