import { GetBagProducts } from "../../Api/Api"
import { GET_BAG_PRODUCTS, SET_MESSAGE } from "../action.types";


export const getBagProducts = (userId) => {
    return async dispatch => {
        const data = await GetBagProducts(userId);
        if(data.message){
            dispatch({type: SET_MESSAGE, message: [data.message]});
        }else{
            dispatch({type: GET_BAG_PRODUCTS, data: data});
        }
    }
}