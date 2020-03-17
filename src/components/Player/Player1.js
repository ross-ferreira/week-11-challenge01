import React, { useState } from "react";


 const Player1 = ({player1Score,player2Score,handleIncrementP2,handleIncrementP1,style}) => {

  return (
    <>
    <div className="row mb-4" >
    <div className="col-md-4 mt-4">
        <div className={"card text-center " + (style === "player1" ? "bg-dark text-white": "")}>
            <h5 className="card-header">Player 1</h5>
            <div className="card-body">
                <p className="card-text display-1">{player1Score}</p>
            </div>
            <div className="card-footer">
                <button onClick={ (player1Score + player2Score) > 20 ? null : handleIncrementP1 } className="form-control btn btn-success">+</button>
            </div>
        </div>
    </div>
    </div >
    </>
  );
}
export default Player1;