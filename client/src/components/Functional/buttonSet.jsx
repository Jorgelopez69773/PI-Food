import React from "react";
import "../styles/buttonSet.css";
const Buttonset=(props)=>{
    return (
        <div className="buttoon">
        <button className="button-secundary" disabled={props.disabled} onClick={props.function}>{props.name}</button>
        </div>
    )
};


export default Buttonset;