import {connect} from "react-redux";

import Button from './component';
import {resetButton} from '../../data/actions';


const mapDispatchToProps= (dispatch) => {
  return { 
      
      handleIncrementR0:() => {
          dispatch(resetButton())
      }

  };
}

export default  connect(null,mapDispatchToProps)(Button);


