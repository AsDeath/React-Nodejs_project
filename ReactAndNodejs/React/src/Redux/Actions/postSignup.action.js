import { PostSignup } from "../../Api/Api"
import { POST_SIGNUP, SET_MESSAGE } from "../action.types";

export const postSignup = (data) => {
    return async dispatch => {
        const answer = await PostSignup(data);
        dispatch({type: SET_MESSAGE, message: [answer.message]});
    }
}