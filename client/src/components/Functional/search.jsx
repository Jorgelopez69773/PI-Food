import React from "react";
import { Fragment } from "react";
import { useState } from "react";
import {useDispatch} from "react-redux";
import {setName,getRecipes} from "../../redux/actions";
import "../styles/search.css";
const Search=()=>{
    const dispatch=useDispatch();
   

    const [recipe,setRecipe]=useState("");

    const onSubmit=(e)=>{
        e.preventDefault();
        e.target.reset();
        dispatch(setName(recipe));
        dispatch(getRecipes({name:recipe}));
    };
    return (
        <Fragment>
            <form className="search-container" onSubmit={onSubmit}>
            <input className="search" type="text" name="recipe" id="Recipe" placeholder="Recipe..." onChange={(e)=> setRecipe(e.target.value)}/>
            <input className="search-button" type="submit"  value="Buscar"/>
            </form>
        </Fragment>
    )
};
export default Search;