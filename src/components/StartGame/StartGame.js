import React, { useState } from "react";

import {Link} from 'react-router-dom';


 const StartGame = ({winningScore,alternateServer,player1Name,handleFormSubmit,player2Name}) => {

    const [inputValueP1, setInputValueP1] = useState(player1Name);
    const [inputValueP2, setInputValueP2] = useState(player2Name);
    const [inputWinScore, setWinScore] = useState(winningScore);
    const [inputAlternateServe, setAlternateServe] = useState(alternateServer);
    
    const handleInputP1 = (e) => {
        setInputValueP1(e.currentTarget.value); 
    }
    const handleInputP2 = (e) => {
        setInputValueP2(e.currentTarget.value); 
    }

    const handleInputScore = (e) => {
        setWinScore(e.currentTarget.value); 
    }

    const handleAlternateServe = (e) => {
        setAlternateServe(e.currentTarget.value); 
    }

    const handleSubmit= (e) => {
        e.preventDefault();
        handleFormSubmit(inputValueP1,inputValueP2,inputWinScore,inputAlternateServe);
    }

  return (
    <>
        <form onSubmit={handleSubmit} >
            <div class="form-group">
                <label for="player1name">Player 1 Name</label>
                <input onChange={handleInputP1} value={inputValueP1} class="form-control" id="player1name" placeholder="Enter Name"></input>
            </div>
            <div class="form-group">
                <label for="player2name">Player 2 Name</label>
                <input onChange={handleInputP2} value={inputValueP2} class="form-control" id="player2name" placeholder="Enter Name"></input>
            </div>
            <div class="form-group">
                <label for="points">Winning Score</label>
                <input onChange={handleInputScore} type="number" id="points" name="points" value={inputWinScore}/>
            </div>
            <div class="form-group">
                <label class="mr-sm-2" for="inlineFormCustomSelect">Alternate Every</label>
                <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                    <option value={inputAlternateServe} onChange={handleAlternateServe} selected>{inputAlternateServe}</option>
                    <option value="3">3</option>
                    <option value="5">5</option>
                    <option value="7">7</option>
                </select>
            </div>
            <Link to="/game">
            <button type="submit" class="btn btn-success">StartGame</button>
            </Link>
        </form>
    </>
  );
}
export default StartGame;