const Router=require('express');
const router=Router();
const {getRecipes,getRecipeId,getRecipesDiet}=require('../controllers/RecipesController');

router.get('',getRecipes);
router.get('/:id',getRecipeId);
router.get('/recipediet',getRecipesDiet);

module.exports=router;