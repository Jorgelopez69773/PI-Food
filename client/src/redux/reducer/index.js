
import { 
    GET_RECIPES,
    SET_ORDER,
    SET_NAME,
    SET_PAGE,
    GET_DIETS,
    SET_ID,
    GET_RECIPE_ID
} from "../actions/index.js";


const initialState={
    recipes:[],
    recipe:{},
    types:[],
    name:"",
    order:"",
    page:0,
    id:""
};


export default function reducer(state=initialState,action){
    switch(action.type){
        case GET_RECIPES:
            return {
            ...state,
            recipes:action.payload
        }
        case SET_ORDER:
            return {
            ...state,
            order:action.payload
        }
        case SET_NAME:
            return{
                ...state,
                name:action.payload
            }
        case SET_PAGE:
            return {
                ...state,
                page:action.payload
            }
        case SET_ID:
            return {
                ...state,
                id:action.payload
            }
        case GET_DIETS:
            return {
                ...state,
                types:action.payload
            }
        case GET_RECIPE_ID:
            return {
                ...state,
                recipe:action.payload
            }
        default:return state;
    }
};