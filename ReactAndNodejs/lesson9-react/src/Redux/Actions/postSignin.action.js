import { PostSignin } from "../../Api/Api"
import { POST_SIGNIN, SET_MESSAGE } from "../action.types";

export const postSignin = (data) => {
    return async dispatch => {
        const user = await PostSignin(data);
        if(user.message){
            dispatch({type: SET_MESSAGE, message: [user.message]})
        }else{
            dispatch({type: POST_SIGNIN, user: user});
        }
    }
}