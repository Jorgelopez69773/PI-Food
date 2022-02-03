const {Recipe,Diet} = require('../db');

async function loadDiets(req,res,next){
try{
    let typeOfDiet=['pescatarian','vegetarian','lacto ovo vegetarian','vegan','paleo','gluten free','primal'];
    typeOfDiet=typeOfDiet.map(diet=>{
        return {
            name:diet
        }
    });
    typeOfDiet=await Promise.all(typeOfDiet.map(diet=>{Diet.findOrCreate({where:diet})}));
    console.log('Tipos de Dietas Cargadas con Exito');
}catch(error){
    console.log(error)
}
};



module.exports=loadDiets;
