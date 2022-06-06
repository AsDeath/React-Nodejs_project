import { DeleteSameBagProducts } from "../../Api/Api"
import { DELETE_BAG_PRODUCT, SET_MESSAGE } from "../action.types";


export const deleteSameBagProducts = (values) => {
    return async dispatch => {
        const data = await DeleteSameBagProducts(values);
        if(data.message){
            dispatch({type: SET_MESSAGE, message: [data.message]});
        }else{
            dispatch({type: DELETE_BAG_PRODUCT, data: data});
        }
    }
}