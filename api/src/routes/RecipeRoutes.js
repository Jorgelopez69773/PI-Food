const Router=require('express');
const router=Router();
const {postRecipe}=require('../controllers/RecipeControllers.js');

router.post('',postRecipe);



module.exports=router;
