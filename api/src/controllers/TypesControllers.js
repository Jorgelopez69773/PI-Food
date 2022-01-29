const {Diet}= require('../db');

async function getDiets(req,res,next){
    try{
        let result=await Diet.findAll();
        res.json(result);
    }catch(error){
        next(error)
    }
};


module.exports=getDiets;