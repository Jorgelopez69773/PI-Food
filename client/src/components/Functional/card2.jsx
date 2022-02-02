import React from "react";
import "../styles/card2.css";
const Card2=(props)=>{
    console.log(props)
    return (
         <div className="recipe border">
             <h1 className="title">{props.title}</h1>
         <div className="container-secundary border">
         <h2 className="subtitle align-left">Summary:</h2>
           <div className="grid">
           <img className="img border item2" src={props.image} alt={props.title} />
         <div  className="text text-center item1" dangerouslySetInnerHTML={{ __html: props.summary }} />
            </div>  
         </div>
        <div className="container-secundary border medium">
             <h2 className="subtitle">Diets:</h2>
                 <ul className="list">
                     {
                          props.Diets?.map((Diet)=>{
                              if(typeof Diet==='object'){
                                  return (
                                    <li key={Diet.name} type="circle" className="text special">{Diet.name}</li>
                                  )
                              }else{
                                return(
                                        <li key={Diet} type="circle" className="text special">{Diet}</li>
                                )
                              }
                          })
                     }
                 </ul>
         </div>
         <div className="container-dates">
         <div className="container-secundary border small">
             <h2 className="subtitle">Spoonacular Score:<h3 className="text">{props.spoonacularScore}</h3></h2>
         </div>
         <div className="container-secundary border small">
             <h2 className="subtitle">Health Score:<h3 className="text">{props.healthScore}</h3></h2>
         </div>
        </div>
         <div className="container-secundary border">
             <h2 className="subtitle">Instructions:</h2>
             <div className="text" dangerouslySetInnerHTML={{ __html: props.instructions }} />
         </div>
             
        </div>
)
};



export default Card2;