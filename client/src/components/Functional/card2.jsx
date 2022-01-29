import React from "react";

const Card2=(props)=>{

    return (
         <div className="recipe">
            <img src={props.image} alt={props.title} />
            <h1>{props.title}</h1>
            <h2>Summary:</h2> 
            <div dangerouslySetInnerHTML={{ __html: props.summary }} /> 
            <h2>Diets:</h2>
            <ul>
            {
                props.Diets?.map((Diet)=>{
                    return(
                        <li type="circle">{Diet}</li>
                    )
                })
            }
            </ul>
            <h3>Spoonacular Score:{props.spoonacularScore}</h3>
            <h3>Health Score:{props.healthScore}</h3>
            <h2>Instructions:</h2>
            {props.instructions}
        </div>
)
};



export default Card2;