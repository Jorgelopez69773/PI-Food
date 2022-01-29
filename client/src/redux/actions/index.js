import axios from "axios";

export const GET_RECIPES="GET_RECIPES";
export const GET_RECIPE_ID="GET_RECIPE_ID"
export const GET_DIETS="GET_DIETS";
export const SET_ORDER="SET_ORDER";
export const SET_NAME="SET_NAME";
export const SET_PAGE="SET_PAGE";
export const SET_ID="SET_ID";
export const POST_RECIPE="POST_RECIPE";




export const getRecipes=({name,order,page})=>async (dispatch)=>{
    try{
        if(!name){
            name=null;
        }else{
            name=`=${name}`
        };
        if(!page){
            page=null;
        }else {
            page=`=${page}`
        };
        if(!order){
            order=null
        }else {
            order=`=${order}`
        };
        let result=await axios.get(`http://localhost:3001/recipes?name${name}&page${page}&order${order}`);
        return dispatch({
            type:GET_RECIPES,
            payload:result.data
        });
    }catch(error){
        console.log(error)
    }
};


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