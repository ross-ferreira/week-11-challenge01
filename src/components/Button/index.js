import {connect} from "react-redux";

import Button from './component';


const mapDispatchToProps= (dispatch) => {
  return { 
      
      handleIncrementR0:() => {
          dispatch({
              type:"RESET",
          })
      }

  };
}

export default  connect(null,mapDispatchToProps)(Button);


