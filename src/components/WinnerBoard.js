import React, { useState } from "react";


 const WinnerBoard = ({player1Score,player2Score}) => {

  return (
    <>
        <h2 className="alert alert-success">{
          (player1Score + player2Score)===21 && 
          (player1Score > player2Score) && 
          (player1Score > (player2Score +2)) ? "Player 1 wins!" :null } {
          (player1Score + player2Score)===21 && 
          (player2Score > player1Score) && 
          (player2Score > (player1Score +2)) ? "Player 2 wins!" :null }
        </h2>
        <hr/>
    </>
  )
}
export default WinnerBoard;