import React from "react";
import Formcreate from "../Functional/form";
import Butttonlink from "../Functional/buttonLink";
import "../styles/createRecipe.css";
const Createrecipe=()=>{
    return (
        <div className="create-recipe">
            <Formcreate/>
            <div className="create-areabutton">
            <Butttonlink to="/home" name="Back"/>
            </div>
            
        </div>
    )
};



export default Createrecipe;