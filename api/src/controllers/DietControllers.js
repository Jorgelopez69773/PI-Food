const {Recipe,Diet} = require('../db');

async function loadDiets(req,res,next){
try{
    let typeOfDiet=['omnivore','pescetarian','vegetarian','lacto ovo vegetarian','vegan','fruitarian','paleo'];
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
