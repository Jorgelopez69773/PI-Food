import React from "react";
import Navegador from "../Secondary/nav";
import Order from "../Secondary/order";
import Sampling from "../Secondary/sampling";
const Home=()=>{

    return (
        <div>
            <Navegador/>
            <div className="order-sampling">
            <Order/>
            <Sampling/>
            </div>
        </div>
    )
};
export default Home;