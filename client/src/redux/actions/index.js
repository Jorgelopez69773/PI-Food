import axios from "axios";

export const GET_RECIPES="GET_RECIPES";
export const GET_RECIPESSAMPLING="GET_RECIPESSAMPLING";
export const GET_RECIPE_ID="GET_RECIPE_ID"
export const GET_DIETS="GET_DIETS";
export const SET_ORDER="SET_ORDER";
export const SET_NAME="SET_NAME";
export const SET_PAGE="SET_PAGE";
export const SET_ID="SET_ID";
export const POST_RECIPE="POST_RECIPE";




export const getRecipes=({name})=>async (dispatch)=>{
    try{
        if(!name){
            name=null;
        }else{
            name=`=${name}`
        };
        let result=await axios.get(`http://localhost:3001/recipes?name${name}`);
        return dispatch({
            type:GET_RECIPES,
            payload:result.data
        });
    }catch(error){
        console.log(error)
    }
};

export const getRecipesSampling=(array,order,page)=>async (dispatch)=>{
    let number=10



    
    //Ordenamiento
    if(order && order!==""){
        if(order==='ASC'||order==='DESC'){
    array=array.sort((a,b)=>{
        if(a.name>b.name)return 1;
        if(b.name>a.name)return -1;
        return 0
    });
    if(order==='DESC'){
        array=array.reverse();
    }
    };
    if(order==='ASC1'||order==='DESC1'){
        array=array.sort((a,b)=>{
            if(a.spoonacularScore>b.spoonacularScore)return 1;
            if(b.spoonacularScore>a.spoonacularScore)return -1;
            return 0
        });
        if(order==='DESC1'){
            array=array.reverse();
        }
    };    
    };
    if(!page || page==="" ||page>10){
        page=0
    };

    // Paginado
    array=array.slice(page*number,page*number+10);


    return dispatch({
        type:GET_RECIPESSAMPLING,
        payload:array
    })
}


export const getDiets=()=>async (dispatch)=>{
    let result =await axios.get('http://localhost:3001/types');
    return dispatch({
        type:GET_DIETS,
        payload:result.data
    })
};

export const setOrder= (string)=>async (dispatch)=>{
    try{
        return dispatch({
            type:SET_ORDER,
            payload:string
        });
    }catch(error){
        console.log(error)
    }
};

export const setName=(string)=>async (dispatch)=>{
    try{
        return dispatch({
            type:SET_NAME,
            payload:string
        });
    }catch(error){
        console.log(error)
    }
};

export const SetPage=(value)=> async(dispatch)=>{
    try{
        if(value<0){
            value=0
        };
        if(value>9){
            value=0
        }
        return dispatch({
            type:SET_PAGE,
            payload:value
        })
    }catch(error){
        console.log(error)
    }
};
export const setId=(id)=>async(dispatch)=>{
    try{
        return dispatch({
            type:SET_ID,
            payload:id
        });
    }catch(error){
        console.log(error)
    }
}

export const PostRecipe=(object)=>async(dispatch)=>{
    try{
        await axios.post('http://localhost:3001/recipe',object)
        return dispatch({
            type:POST_RECIPE
        })
    }catch(error){
        console.log(error)
    }
};

export const getRecipeId=(id)=>async (dispatch)=>{
    try{
        let result= await axios.get(`http://localhost:3001/recipes/${id}`);
        return dispatch({
            type:GET_RECIPE_ID,
            payload:result.data
        })
    }catch(error){
        console.log(error)
    }
}