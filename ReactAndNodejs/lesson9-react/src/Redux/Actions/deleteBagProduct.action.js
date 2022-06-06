import { DeleteBagProduct } from "../../Api/Api"
import { DELETE_BAG_PRODUCT, SET_MESSAGE } from "../action.types";


export const deleteBagProduct = (values) => {
    return async dispatch => {
        const data = await DeleteBagProduct(values);
        if(data.message){
            dispatch({type: SET_MESSAGE, message: [data.message]});
        }else{
            dispatch({type: DELETE_BAG_PRODUCT, data: data});
        }
    }
}