import React from "react";
import { Fragment } from "react";
import {useDispatch}from "react-redux";
import {setOrder} from "../../redux/actions/index.js"
import Buttonset from "../Functional/buttonSet";

const Order=()=>{
    const dispatch=useDispatch()
    return (
        <Fragment>
            <div className="order-name">
                <p>Ordenamiento por Nombre:</p>
                <Buttonset function={()=>dispatch(setOrder('ASC'))} name="ASC"/>
                <Buttonset function={()=>dispatch(setOrder('DESC'))} name="DESC"/>
            </div>
            <div className="order-point">
                <p>Ordenamiento por Puntaje:</p>
                <Buttonset function={()=>dispatch(setOrder('ASC1'))} name="ASC"/>
                <Buttonset function={()=>dispatch(setOrder('DESC1'))} name="DESC"/> 
            </div>
        </Fragment>
    )
};


export default Order;