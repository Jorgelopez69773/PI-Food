import React from "react";
import Search from "../Functional/search"
import Butttonlink from "../Functional/buttonLink";
import "../styles/nav.css";
const Navegador=()=>{
    return (
        <nav className="nav">
            <Butttonlink to="/create" name="Create Recipe"/>
            <Search/>
        </nav>
    )
};


export default Navegador;