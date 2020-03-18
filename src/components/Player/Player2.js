import {connect} from "react-redux";

import Player from './Player';


const mapStateToProps= (state) => {
  return { 
      
    winner:(state.player1 + state.player2)>20,
    style: state.serving === "player2",
    title:"player1",
    score: state.player2,

  };
}

const mapDispatchToProps= (dispatch) => {
    return { 
        
        handleIncrement:() => {
            dispatch({
                type:"INCREMENT_P2",
            })
        }
  
    };
  }

export default  connect(mapStateToProps,mapDispatchToProps)(Player);


// winner, handleIncrement,style,title,score