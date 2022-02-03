import React from "react";
import { Fragment } from "react";
import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {setName,getRecipes,SetPage} from "../../redux/actions";
import "../styles/search.css";
const Search=()=>{
    const dispatch=useDispatch();
    const {recipes}=useSelector(state=>({
        recipes:state.recipes
    }))

    const [recipe,setRecipe]=useState("");

    const onSubmit=(e)=>{
        e.preventDefault();
        e.target.reset();
        dispatch(setName(recipe));
        dispatch(getRecipes({name:recipe}));
        dispatch(SetPage(1,recipes))
    };
    return (
        <Fragment>
            <form className="search-container" onSubmit={onSubmit}>
            <input className="search" type="text" name="recipe" id="Recipe" placeholder="Recipe..." onChange={(e)=> setRecipe(e.target.value)}/>
            <input className="search-button" type="submit"  value="Search"/>
            </form>
        </Fragment>
    )
};
export default Search;