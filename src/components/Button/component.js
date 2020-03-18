import React, { useState } from "react";


 const Button = ({handleIncrementR0}) => {

  return (
    <button onClick={ handleIncrementR0 } className="btn btn-danger">Reset</button>
  )
}
export default Button;