import React from "react";
import { NavLink } from "react-router-dom";
import { Fragment } from "react";
import "../styles/buttonLink.css";
const  Butttonlink=(props)=>{
    return(
        <div className="buttonLink">
            <NavLink className="button-NavLink" to={props.to}><button className="button-general">{props.name}</button></NavLink>
        </div>
    )
}
export default Butttonlink;