import {connect} from "react-redux";

import StartGame from './StartGame';


const mapStateToProps= (state) => {
  return { 
      
    // winner:(state.player1 + state.player2)>20,
    // style: state.serving === "player2",
    // title:"player1",
    // score: state.player2,

  };
}

const mapDispatchToProps= (dispatch) => {
    return { 
        
        handleIncrement:() => {
            dispatch({
                type:"START_GAME",
            })
        }
  
    };
  }

export default  connect(mapStateToProps,mapDispatchToProps)(StartGame);