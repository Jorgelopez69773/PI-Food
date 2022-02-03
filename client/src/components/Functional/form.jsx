import React,{useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { getDiets,PostRecipe } from "../../redux/actions";
import "../styles/form.css";
const Formcreate=()=>{


    const [recipe,setRecipe]=useState({
        name:"",
        summary:"",
        spoonacularScore:0,
        healthScore:0,
        instructions:"",
        idDiets:[]
    });
    const value="value";
    const dispatch=useDispatch();
    const diets=useSelector(state=>state.types);





    useEffect(()=>{dispatch(getDiets())},[value,dispatch]);



    const OnChange=(e)=>{
        setRecipe({
            ...recipe,
            [e.target.name]:e.target.value
        })
    };
    const OnChangeSpecial=(e)=>{
        if(recipe.idDiets.includes(e.target.value)){
           let filterDiets=recipe.idDiets.filter(diet=>diet!==e.target.value)
            setRecipe({
                ...recipe,
                idDiets:filterDiets
            })
    } else {
        setRecipe({
            ...recipe,
            idDiets:[...recipe.idDiets,e.target.value]
        })
    }
    };


    const OnSubmit=(e)=>{
        e.preventDefault();
        dispatch(PostRecipe(recipe));
        setRecipe({
            name:"",
            summary:"",
            spoonacularScore:0,
            healthScore:0,
            instructions:"",
            idDiets:[]
        });
    };
    return (
        <form className="formulario-flex" onSubmit={OnSubmit}>
            <label htmlFor="name">Name:</label>
            <input className="formulario-name" type="text" id="name" name="name" value={recipe.name} placeholder="Name..." onChange={OnChange} required/>
            <label htmlFor="summary">Summary:</label>
            <input className="formulario-summary" type="text" id="summary" name="summary" value={recipe.summary} placeholder="Summary..." onChange={OnChange} required/>
            <label htmlFor="spoonacularScore">Spoonacular Score:</label>
            <input className="formulario-score" type="number" min="0" max="100" id="spoonaculaScore" name="spoonacularScore" value={recipe.spoonacularScore} placeholder="0-100..." onChange={OnChange} />
            <label htmlFor="healthScore">Health Score:</label>
            <input className="formulario-score" type="number" min="0" max="100" id="healthScore" name="healthScore" value={recipe.healthScore} placeholder="0-100..." onChange={OnChange} />
            <label htmlFor="instructions">Instructions:</label>
            <input className="formulario-instructions" type="text" id="instructions" placeholder="Instructions..." name="instructions" value={recipe.instructions} onChange={OnChange} />
            <div className="formulario-conteiner">
                <p className="formulario-text">Tipy of Diet:</p>
                <div className="formulario-grid">
                {
                    diets.map(diet=>
                    <label key={diet.id}><input type="checkbox"  id={diet.name} name="idDiets" value={diet.id} onChange={OnChangeSpecial}/>{diet.name}</label>    
                    )
                }
                </div>
            </div>

            <button className="formulario-button" type="submit">Create</button>
        </form>
    )

};

export default Formcreate;