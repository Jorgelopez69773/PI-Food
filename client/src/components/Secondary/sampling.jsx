import React from "react";
import Card from "../Functional/card";
import {useSelector,useDispatch} from "react-redux";
import { useEffect ,Fragment} from "react";
import { getRecipes } from "../../redux/actions";
import Paginated from "./paginated";



const Sampling=()=>{


    const dispatch=useDispatch();
    const {name,order,page,recipes}=useSelector(state=>({
        name:state.name,
        order:state.order,
        page:state.page,
        recipes:state.recipes
    }));


    useEffect(()=>{
        dispatch(getRecipes({name,order,page}));
    },[dispatch,name,order,page]);





    return (
        <Fragment>
            <Paginated/>
            {
                recipes.map(recipe=>
                    <Card key={recipe.id} image={recipe.image} name={recipe.name} diet={recipe.diets} id={recipe.id}/>)
            }
        </Fragment>
    )
};



export default Sampling;