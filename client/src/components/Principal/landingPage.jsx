import React from 'react';
import Buttonlink from '../Functional/buttonLink.jsx';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getRecipes } from '../../redux/actions/index.js';
import { useSelector } from 'react-redux';

const Landing=()=>{
    const dispatch=useDispatch();
    const {name}=useSelector(state=>(
        {name:state.name}
    ));
    useEffect(()=>dispatch(getRecipes({name})),[dispatch,name]);
    return (
        <div className='LandingPage'>
            <Buttonlink to="/home" name="Home"/>
        </div>
    )
};

export default Landing;