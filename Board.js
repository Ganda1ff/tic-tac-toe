import React from "react";
import './board.css';

const Board = (props) => {
    return (    
        <div className="Board">
            {props.children}
        </div>
        
     );
}
 
export default Board;