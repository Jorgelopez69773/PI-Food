import React from "react";
import Search from "../Functional/search"
import Butttonlink from "../Functional/buttonLink";

const Navegador=()=>{
    return (
        <nav>
            <Butttonlink to="/create" name="Create Recipe"/>
            <Search/>
        </nav>
    )
};


export default Navegador;