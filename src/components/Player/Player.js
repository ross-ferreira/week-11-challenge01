import React, { useState } from "react";


 const Player = ({winner, handleIncrement,style,title,score}) => {

  return (
    <>
    <div class="score-display">
        <div className="">
            <div className={"card text-center " + (style ? "bg-dark text-white": "")}>
                <h5 className="card-header">{title}</h5>
                <div className="card-body">
                    <p className="card-text display-1">{score}</p>
                </div>
                <div className="card-footer">
                    <button onClick={ (winner) ? null : handleIncrement } className="form-control btn btn-success">+</button>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}
export default Player;