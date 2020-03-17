import React, { useState } from "react";


 const Player2 = ({player1Score,player2Score,handleIncrementP2,handleIncrementP1,style}) => {

  return (
    <>
    <div className="row mb-4" >
    <div className="col-md-4 mt-4 ">
                <div className={"card text-center " + (style === "player2" ? "bg-dark text-white": "")}>
                    <h5 className="card-header">Player 2</h5>
                    <div className="card-body">
                        <p className="card-text display-1">{player2Score}</p>
                    </div>
                    <div className="card-footer">
                        <button onClick={ (player1Score + player2Score) > 20 ? null : handleIncrementP2 } className="form-control btn btn-success">+</button>
                    </div>
                </div>
            </div>
            </div>
    </>
  );
}
export default Player2;