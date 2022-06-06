import { SET_MESSAGE } from "../action.types";

export const setMessage = (message) => {
    return dispatch => {
        dispatch({type: SET_MESSAGE, message: message});
    }
}