const {Diet,Recipe}= require('../db');


async function postRecipe(req,res,next){
    
    try{
    let {name,summary,spoonacularScore,healthScore,instructions,idDiets}=req.body;
    let newRecipe={
        name,
        summary,
        spoonacularScore,
        healthScore,
        instructions
    };
   await Recipe.create(newRecipe)
    .then(recipe=>{
        if(idDiets.length>0){
            idDiets.map(diet=>recipe.addDiet(diet))
        }
        res.json({...recipe,idDiets})
    })
}catch(error){
    next(error)
}
};

module.exports={postRecipe};