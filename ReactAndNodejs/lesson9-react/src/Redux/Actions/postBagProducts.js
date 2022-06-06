import { PostBagProducts } from "../../Api/Api"
import { POST_BAG_PRODUCTS, SET_MESSAGE } from "../action.types";


export const postBagProducts = (data) => {
    return async dispatch => {
        const answer = await PostBagProducts(data);
        if(answer.message){
            dispatch({type: SET_MESSAGE, message: [answer.message]})
        }else{
            dispatch({type: POST_BAG_PRODUCTS, data: answer});
        }
    }
}