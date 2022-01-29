import React from "react";
import { Fragment } from "react";
import { useState } from "react";
import {useDispatch} from "react-redux";
import {setName} from "../../redux/actions";
const Search=()=>{

    const dispatch=useDispatch();
   

    const [recipe,setRecipe]=useState("");

    const onSubmit=(e)=>{
        e.preventDefault();
        e.target.reset();
        dispatch(setName(recipe));
    };
    return (
        <Fragment>
            <form onSubmit={onSubmit}>
            <input type="text" name="recipe" id="Recipe" placeholder="Recipe..." onChange={(e)=> setRecipe(e.target.value)}/>
            <input type="submit"  value="Buscar"/>
            </form>
        </Fragment>
    )
};
export default Search;