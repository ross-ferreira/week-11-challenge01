import {connect} from "react-redux";

import ScoreHistory from './ScoreHistory';

const mapStateToProps= (state) => {
  return { 
    score: state.score
 
  };
}

export default  connect(mapStateToProps)(ScoreHistory);

// state here is a global state with all properties
