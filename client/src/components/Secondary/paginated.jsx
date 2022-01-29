import React from "react";
import Buttonset from "../Functional/buttonSet";
import { Fragment } from "react";
import { SetPage } from "../../redux/actions";
import { useDispatch,useSelector } from "react-redux";
const Paginated=()=>{
    const dispatch=useDispatch();
    const {page}=useSelector(state=>({
        page:state.page
    }))
    return (
        <Fragment>
            <Buttonset disable={page===0} function={()=>dispatch(SetPage(page-1))} name="Previous"/>
            <Buttonset function={()=>dispatch(SetPage(page+1))} name="Next"/>
        </Fragment>
    )
}; 

export default Paginated;
