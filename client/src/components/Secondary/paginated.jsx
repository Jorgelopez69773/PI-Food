import React from "react";
import Buttonset from "../Functional/buttonSet";
import { SetPage } from "../../redux/actions";
import { useDispatch,useSelector } from "react-redux";
import "../styles/paginated.css";
const Paginated=()=>{
    const dispatch=useDispatch();
    const {page,recipes}=useSelector(state=>({
        page:state.page,
        recipes:state.recipes
    }));
    let pagetotal=Math.ceil(recipes.length/10);
    return (
        <div className="paginated">
            <Buttonset disable={page===0} function={()=>dispatch(SetPage(page-1,recipes))} name="Previous"/>
            <div className="paginated-text">
                <p>{page}/{pagetotal}</p>
            </div>
            <Buttonset function={()=>dispatch(SetPage(page+1,recipes))} name="Next"/>
        </div>
    )
}; 

export default Paginated;
