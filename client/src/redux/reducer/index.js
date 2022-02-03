
import { 
    GET_RECIPES,
    GET_RECIPESSAMPLING,
    SET_ORDER,
    SET_NAME,
    SET_PAGE,
    GET_DIETS,
    SET_ID,
    GET_RECIPE_ID,
    FILTER_DIET
} from "../actions/index.js";


const initialState={
    recipes:[],
    sampling:[],
    recipe:{},
    types:[],
    name:"",
    order:"",
    page:1,
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
            case GET_RECIPESSAMPLING:
                return {
                    ...state,
                    sampling:action.payload
                }
            case FILTER_DIET:
                return {
                    ...state,
                    recipes:action.payload
                }
        default:return state;
    }
};