import React, { useState } from "react";


 const Button = ({handleIncrementR0}) => {

  return (
    <button onClick={ handleIncrementR0 } className="btn btn-danger">Reset</button>
  )
}
export default Button;



// import {connect} from "react-redux";

// import Button from './component';

// const mapStateToProps= (state) => {
//   return {

//   };
// }

// export default  connect(mapStateToProps)(Button);

