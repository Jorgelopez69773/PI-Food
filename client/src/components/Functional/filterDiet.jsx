import React from "react";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import ButtonSet from "../Functional/buttonSet.jsx"
import { getRecipes, getRecipesDiet, SetPage } from "../../redux/actions/index.js";
import { getDiets } from "../../redux/actions/index.js";
import { useState } from "react";



const Filterdiet=()=>{
    const dispatch=useDispatch()
    const{recipes,diets}=useSelector(state=>({
        recipes:state.recipes,
        diets:state.types
    }))
    // let string="vegan"
    // return (
    //    <ButtonSet function={()=>dispatch(getRecipesDiet(string,recipes))} />
    // )
    let value="value"
    useEffect(()=>{dispatch(getDiets())},[dispatch,value])



    const handleSelect=(e)=>{
        dispatch(getRecipes({}))
        dispatch(getRecipesDiet(e.target.value,recipes))
        dispatch(SetPage(1))
    }
    return (
        <div>
            <select onChange={handleSelect}>
                {
                    diets?.map(diet=>{
                        return (
                            <option key={diet.id} value={diet.name}>{diet.name}</option>
                        )
                    })
                }
            </select>
        </div>
    )
};


export default Filterdiet;