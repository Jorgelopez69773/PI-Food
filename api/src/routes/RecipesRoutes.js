const Router=require('express');
const router=Router();
const {getRecipes,getRecipeId}=require('../controllers/RecipesController');

router.get('',getRecipes);
router.get('/:id',getRecipeId);

module.exports=router;