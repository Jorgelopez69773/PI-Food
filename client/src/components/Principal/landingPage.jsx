import React from 'react';
import Buttonlink from '../Functional/buttonLink.jsx';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getRecipes } from '../../redux/actions/index.js';
import { useSelector } from 'react-redux';
import "../styles/landingPage.css";
const Landing=()=>{
    const dispatch=useDispatch();
    const {name}=useSelector(state=>(
        {name:state.name}
    ));
    useEffect(()=>dispatch(getRecipes({name})),[dispatch,name]);
    return (
        <div className='LandingPage'>
            <img className='LandingPage-img' src="https://thumbs.dreamstime.com/b/surtido-de-comida-r%C3%A1pida-y-vista-superior-doble-borde-lateral-en-un-fondo-banner-madera-oscura-variedad-alimentos-para-consumo-o-184617291.jpg" alt="Fondo Pantalla" />
            <div className='LandingPage-botton'>
            <Buttonlink to="/home" name="Home"/>
            </div>
            
        </div>
    )
};

export default Landing;