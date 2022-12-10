import React from "react";

const Score = (props) => {
    return ( 
        <div className="Score">
            <p className="pX">Player X: {props.pointX}</p>
            <p className="p0">Player O: {props.pointY}</p>
        </div>
     );
}
 
export default Score;