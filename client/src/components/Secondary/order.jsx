import React from "react";
import {useDispatch}from "react-redux";
import {setOrder} from "../../redux/actions/index.js"
import Buttonset from "../Functional/buttonSet";
import Filterdiet from "../Functional/filterDiet.jsx";
import "../styles/order.css";
const Order=()=>{
    const dispatch=useDispatch()
    return (
        <div className="order-flex">
            <div className="order-name">
                <div className="order-buttons">
                <Buttonset function={()=>dispatch(setOrder('ASC'))} name="A-Z"/>
                <p>Name</p>
                <Buttonset function={()=>dispatch(setOrder('DESC'))} name="Z-A"/>
                </div>
            </div>
            {/* <div>
                <Filterdiet/>
            </div> */}
            <div className="order-point">
                <div className="order-buttons">
                <Buttonset function={()=>dispatch(setOrder('ASC1'))} name="1-100"/>
                <p>Point</p>
                <Buttonset function={()=>dispatch(setOrder('DESC1'))} name="100-1"/> 
                </div>
            </div>
        </div>
    )
};


export default Order;