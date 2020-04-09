import React, { useState } from "react";
import { Link } from "react-router-dom";


 const Button = ({handleIncrementR0}) => {

  return (
    <Link to="/startgame">
    <button onClick={ handleIncrementR0 } className="btn btn-danger">Reset</button>
    </Link>
  )
}
export default Button;