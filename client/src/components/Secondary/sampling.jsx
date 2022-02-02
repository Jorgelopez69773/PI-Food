import React from "react";
import Card from "../Functional/card";
import {useSelector,useDispatch} from "react-redux";
import { useEffect ,Fragment} from "react";
import { getRecipesSampling } from "../../redux/actions";
import Paginated from "./paginated";
import "../styles/sampling.css";
const Sampling=()=>{

    const dispatch=useDispatch();
    const {order,page,recipes,sampling}=useSelector(state=>({
        order:state.order,
        page:state.page,
        recipes:state.recipes,
        sampling:state.sampling
    }));


    useEffect(()=>{
        dispatch(getRecipesSampling(recipes,order,page));
    },[dispatch,order,page,recipes]);
    let number=1;
    let item="item";
    let result="";
    return (
        <div className="sampling-flex">
            
            <Paginated/>
            <div className="grid-card">
            {
                sampling.map(recipe=>
                    {
                        result=item+number;
                        number++;
                    return (<Card className={result} key={recipe.id} image={recipe.image} name={recipe.name} diet={recipe.diets} id={recipe.id}/>)
                    })
            }
            </div>
        </div>
    )
};



export default Sampling;