import React from "react";
import Formcreate from "../Functional/form";
import { Fragment } from "react";
import Butttonlink from "../Functional/buttonLink";
const Createrecipe=()=>{
    return (
        <Fragment>
            <Butttonlink to="/home" name="Back"/>
            <Formcreate/>
        </Fragment>
    )
};



export default Createrecipe;