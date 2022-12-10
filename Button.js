import React from "react";
import "./button.css";

const Button = ({value, onClick}) => {
    return ( 
        <button className="btn" onClick={onClick}>
            <p>{value}</p>
        </button>
     );
}
 
export default Button;