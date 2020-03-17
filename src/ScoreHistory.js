import React, { useState } from "react";


 const ScoreHistory = ({score}) => {

  return (
    <>

        <table class="table">
        <thead>
        <tr>
            <th scope="col">Game</th>
            <th scope="col">Player 1 Score</th>
            <th scope="col">Result</th>
            <th scope="col">Player 2 Score</th>
            <th scope="col">Result</th>
        </tr>
        </thead>
        <tbody>
            {score.map((item, index) => (
                <tr>
                    <th scope="row">{index +1}</th>
                        <td key={ index }>
                        {item.player_1.score} 
                        </td>
                        <td key={ index }>
                        {item.player_1.won === true ? "Won":"Lost" } 
                        </td>
                        <td key={ index }>
                        {item.player_2.score} 
                        </td>
                        <td key={ index }>
                        {item.player_2.won === true ? "Won":"Lost" } 
                        </td>
                </tr>
            ))}

        </tbody>
        </table>

</>
  );
}
export default ScoreHistory;