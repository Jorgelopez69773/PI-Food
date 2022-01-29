import React,{useEffect} from "react";
import { useDispatch,useSelector } from "react-redux"; 
import { getRecipeId} from "../../redux/actions";
import Card2 from "../Functional/card2";
import Buttonlink from "../Functional/buttonLink.jsx"
const Recipe=()=>{
    let id=window.location.pathname;
    id= id.slice(8);
    
    let {title,summary,image,spoonacularScore,healthScore,instructions,diets}=useSelector(state=>state.recipe);
    const dispatch=useDispatch();
    
    
    useEffect(()=>{dispatch(getRecipeId(id))},[dispatch,id]);
    return (
        <div>
        <Card2 title={title} summary={summary} image={image} spoonacularScore={spoonacularScore} healthScore={healthScore} instructions={instructions} Diets={diets}/>
        <Buttonlink to="/home" name="Back"/>
        </div>
        )
}

export default Recipe;




