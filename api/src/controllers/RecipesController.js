require('dotenv').config();
const axios=require('axios');
const {Op}=require('sequelize');
const {DB_KEY}= process.env;
const {Recipe,Diet}=require ('../db');


async function getRecipes(req,res,next){
    let URL=`https://api.spoonacular.com/recipes/complexSearch?apiKey=${DB_KEY}&addRecipeInformation=true`;
    let {name}=req.query
    let number=100
    if(name && name!==""){
        URL=URL+`&query=${name}`;
        resultDb=await Recipe.findAll({
            attributes:['name','spoonacularScore','id'],
            where:{
                name:{
                    [Op.iLike]:`${name}%`
                }
            },
            include:[{
                model:Diet,
                attributes:['name']
                }
            ]
        })
    } else {
        resultDb=await Recipe.findAll({
            attributtes:['name','spoonacularScore','id'],
            include:[{
                model:Diet,
                attributes:['name']
                }
            ],
        })
        
    };
    if(resultDb.length!==0 && resultDb.length<100){
        number=number-resultDb.length;
        URL=URL+`&number=${number}`;
    
    }
    if(resultDb.length===0 || !resultDb){
        URL=URL+`&number=${number}`;
    }
    resultApi= (await axios.get(URL)).data.results;
    resultApi=resultApi.map(recipe=>{return {
        id:recipe.id,
        name:recipe.title,
        image:recipe.image,
        diets:recipe.diets,
        spoonacularScore:recipe.spoonacularScore
    }})
    let result=resultDb.concat(resultApi);
    res.json(result);
}


// async function getRecipes(req,res,next){
//     try{
// let URL=`https://api.spoonacular.com/recipes/complexSearch?apiKey=${DB_KEY}&addRecipeInformation=true`;
// let {name,order,page}=req.query;
// let number=100;

// if(!order || order===""){
//     order='ASC';
// };
// if(!page || page<0){
//     page=0;
// };
// let offset=page*number;

// //DATABASE
// let resultDb=[];
// //RECORDAR EN EL FRONT PONER A NAME POR DEFAULT ""
// if(name && name!==""){
//     URL=URL+`&query=${name}`;
//     resultDb=await Recipe.findAll({
//         attributes:['name','spoonacularScore','id'],
//         where:{
//             name:{
//                 [Op.iLike]:`${name}%`
//             }
//         },
//         include:[{
//             model:Diet,
//             attributes:['name']
//             }
//         ]
//     })
// } else {
//     resultDb=await Recipe.findAll({
//         attributtes:['name','spoonacularScore','id'],
//         include:[{
//             model:Diet,
//             attributes:['name']
//             }
//         ],
//     })
// };
// if(resultDb.length!==0 && resultDb.length<100){
//     number=number-resultDb.length;
//     URL=URL+`&number=${number}`;

// }
// if(resultDb.length===0 || !resultDb){
//     URL=URL+`&number=${number}`;
// }
// //API
// let resultApi=(await axios.get(URL)).data.results
//         resultApi=resultApi.map(recipe=>{
//             return {
//                 id:recipe.id,
//                 name:recipe.title,
//                 image:recipe.image,
//                 diets:recipe.diets,
//                 spoonacularScore:recipe.spoonacularScore
//             }
//         });



//         //CONCAT LOS DOS ARRAY
// let result=resultDb.concat(resultApi);
// console.log(URL);
// if(result.length===0){
//     res.json({
//         menssage:`No recipe found with the name ${name}`
//     })
// } else {
    
    
//     //ORDENAR ARRAY:
//     if(order==='ASC'||order==='DESC'){
//     result=result.sort((a,b)=>{
//         if(a.name>b.name)return 1;
//         if(b.name>a.name)return -1;
//         return 0
//     });
//     if(order==='DESC'){
//         result=result.reverse();
//     }
//     };
//     if(order==='ASC1'||order==='DESC1'){
//         result=result.sort((a,b)=>{
//             if(a.spoonacularScore>b.spoonacularScore)return 1;
//             if(b.spoonacularScore>a.spoonacularScore)return -1;
//             return 0
//         });
//         if(order==='DESC1'){
//             result=result.reverse();
//         }
//     };

//     res.json(result);
//     };
// }catch(error){
//     next(error)
//     }
// };


async function getRecipeId(req,res,next){
    try{
        id=req.params.id;
        let URL=`https://api.spoonacular.com/recipes/${id}/information?apiKey=${DB_KEY}`;
        let result="";
        //DATABASE
        if(id.includes('-')){
        data= await Recipe.findAll({
            where:{
                id:id
            },
            include:[{
                model:Diet,
                attributes:['name']
            }]
            
        });
        result=data[0];
        }else{
        //API
        result=(await axios.get(URL)).data;
        result={
            image:result.image,
            title:result.title,
            diets:result.diets,
            summary:result.summary,
            spoonacularScore:result.spoonacularScore,
            healthScore:result.healthScore,
            instructions:result.instructions 
        }
    }
        res.json(result);
    }catch(error){
        next(error)
    }
}



module.exports={getRecipes,getRecipeId};