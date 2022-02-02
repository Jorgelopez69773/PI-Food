import React from "react";
import Navegador from "../Secondary/nav";
import Order from "../Secondary/order";
import Sampling from "../Secondary/sampling";
import { useDispatch} from "react-redux";
import { useEffect } from "react";
import { getRecipes } from "../../redux/actions";
import "../styles/home.css";
const Home=()=>{
const dispatch=useDispatch();
useEffect(()=>{dispatch(getRecipes({}))},[dispatch])
    return (
        <div className="home-grid">
            <div className="home-nav">
                <Navegador/>
            </div>
            <div className="home-order">
            <Order/>
            </div>
            <div className="home-sampling">
            <Sampling/>
            </div>
        </div>
    )
};
export default Home;