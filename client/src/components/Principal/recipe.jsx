import React,{useEffect} from "react";
import { useDispatch,useSelector } from "react-redux"; 
import { getRecipeId} from "../../redux/actions";
import Card2 from "../Functional/card2";
import Buttonlink from "../Functional/buttonLink.jsx";
import "../styles/recipe.css";
const Recipe=()=>{
    let id=window.location.pathname;
    id= id.slice(8);
    
    let recipe=useSelector(state=>state.recipe);
    const dispatch=useDispatch();
    useEffect(()=>{dispatch(getRecipeId(id))},[dispatch,id]);
    return (
        <div className="recipe-flex">
        <Card2 title={recipe.title} summary={recipe.summary} image={recipe.image} spoonacularScore={recipe.spoonacularScore} healthScore={recipe.healthScore} instructions={recipe.instructions} Diets={recipe.diets}/>
        <Buttonlink to="/home" name="Back"/>
        </div>
        )
}

export default Recipe;




