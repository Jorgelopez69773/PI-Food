import React from "react";
import { NavLink } from "react-router-dom";
const Card=(props)=>{
    let diets=props.diet;
    let href=`/recipe/${props.id}`;
    return (
        <div>
            <img src={props.image} alt={props.name}/>
            <NavLink to={href} ><h1>{props.name}</h1></NavLink>
            <ul>
            {
                diets.map(diet=>{
                    if(typeof diet==="string"){
                        return(
                    <li key={diet}>{diet}</li>
                    )
                    } else {
                        return (
                        <li key={diet.name}>{diet.name}</li>
                        )
                    }
                }
                ) 
            }
            </ul>
        </div>
    )
};


export default Card;




//Recodartorio para mañana agregarle un propiedad a button link para q no paresca un boton o si lo paresca dependiendo