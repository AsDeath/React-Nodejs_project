import { LOGIN_DATA } from "../action.types";

export const login_action = (data) => {
    return dispatch => {
        dispatch({type: LOGIN_DATA, login_data: data});
    }
}