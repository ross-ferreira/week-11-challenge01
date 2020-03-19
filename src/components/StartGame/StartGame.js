import React, { useState } from "react";


 const StartGame = ({score}) => {

  return (
    <>
        <form>
            <div class="form-group">
                <label for="player1name">Player 1 Name</label>
                <input type="text" class="form-control" id="player1name" placeholder="Enter Name"></input>
            </div>
            <div class="form-group">
                <label for="player2name">Player 2 Name</label>
                <input type="text" class="form-control" id="player2name" placeholder="Enter Name"></input>
            </div>
            <div class="form-group">
                <label for="points">Winning Score</label>
                <input type="number" id="points" name="points" value="21"/>
            </div>
            <div class="form-group">
                <label class="mr-sm-2" for="inlineFormCustomSelect">Alternate Every</label>
                <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                    <option selected>5</option>
                    <option value="1">3</option>
                    <option value="2">7</option>
                    <option value="3">9</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary">StartGame</button>
        </form>
    </>
  );
}
export default StartGame;