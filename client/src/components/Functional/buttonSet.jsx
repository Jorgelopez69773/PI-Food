import React from "react";
const Buttonset=(props)=>{
    return (
        <button disabled={props.disabled} onClick={props.function}>{props.name}</button>
    )
};


export default Buttonset;