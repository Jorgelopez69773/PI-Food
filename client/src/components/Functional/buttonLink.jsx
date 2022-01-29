import React from "react";
import { NavLink } from "react-router-dom";
import { Fragment } from "react";


const  Butttonlink=(props)=>{
    return(
        <Fragment>
            <NavLink className="button" to={props.to}><button>{props.name}</button></NavLink>
        </Fragment>
    )
}
export default Butttonlink;