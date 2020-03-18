import React, { useState } from "react";


 const WinnerBoard = ({winner1,winner2}) => {

  return (
    <>
        <h2 className="alert alert-success"> {winner1 }{winner2}
        </h2>
        <hr/>
    </>
  )
}
export default WinnerBoard;