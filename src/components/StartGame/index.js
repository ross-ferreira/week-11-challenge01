import {connect} from "react-redux";
import history from "../../history";

import StartGame from './StartGame';
import {startGame} from '../../data/actions'


const mapStateToProps= (state) => {
  return { 
    winningScore: state.winningScore,
    alternateServer: state.alternateServer,
    player1Name: state.player1Name,
  };
}

const mapDispatchToProps= (dispatch) => {
    return { 
        
        handleFormSubmit:(valueP1,valueP2,valueWinScore,altServe) => {
            dispatch( startGame(valueP1,valueP2,valueWinScore,altServe) );
            // go to the homepage
            history.push("/");
        },

  
    };
  }

export default  connect(mapStateToProps,mapDispatchToProps)(StartGame);