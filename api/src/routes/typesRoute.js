const Router= require('express');
const router=Router();
const getDiets=require('../controllers/typesControllers');



router.get('',getDiets);


module.exports=router;