import {connect} from "react-redux";

import Player from './Player';
import {increment_p2} from '../../data/actions'


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
            dispatch(increment_p2())
        }
  
    };
  }

export default  connect(mapStateToProps,mapDispatchToProps)(Player);


// winner, handleIncrement,style,title,score