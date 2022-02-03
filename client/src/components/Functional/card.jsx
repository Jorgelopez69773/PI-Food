import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/card.css"
const Card=(props)=>{
    let diets=props.diet;
    let href=`/recipe/${props.id}`;
    let ClassName=props.className
    ClassName=ClassName+' card-container';
    return (
        <div ClassName={ClassName} >
            <div className="card-container border">
            <img className="card-img" src={props.image} alt={props.name}/>
            <div className="atras">
            <div className="card-container-secundary">
            <NavLink to={href} ><h1 className="card-title">{props.name}</h1></NavLink>
            <ul className="card-list">
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
            </div>
            </div>
        </div>
    )
};


export default Card;




//Recodartorio para mañana agregarle un propiedad a button link para q no paresca un boton o si lo paresca dependiendo