import React from "react";
import Buttonset from "../Functional/buttonSet";
import { Fragment } from "react";
import { SetPage } from "../../redux/actions";
import { useDispatch,useSelector } from "react-redux";
import "../styles/paginated.css";
const Paginated=()=>{
    const dispatch=useDispatch();
    const {page}=useSelector(state=>({
        page:state.page
    }))
    return (
        <div className="paginated">
            <Buttonset disable={page===0} function={()=>dispatch(SetPage(page-1))} name="Previous"/>
            <div className="paginated-text">
                <p>{page}/9</p>
            </div>
            <Buttonset function={()=>dispatch(SetPage(page+1))} name="Next"/>
        </div>
    )
}; 

export default Paginated;
