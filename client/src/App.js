import React from "react";
import {Route,Routes} from "react-router-dom";
import Landing from "./components/Principal/landingPage.jsx";
import Home from "./components/Principal/home.jsx";
import Createrecipe from "./components/Principal/createRecipe.jsx";
import Recipe from "./components/Principal/recipe.jsx";

// import {useEffect} from 'react';
// import {useSelector,useDispatch} from 'react-redux';
// import {getRecipes,setOrderDESC} from './redux/actions/index.js';

function App() {
  return (
      <Routes>
      <Route exact path="/" element={<Landing/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/create" element={<Createrecipe/>}/>
      <Route path="/recipe/:id" element={<Recipe/>}/>
      </Routes>
  );
}

export default App;
