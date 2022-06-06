import { GetLogo } from "../../Api/Api"
import { GET_LOGO } from "../action.types";


export const getLogo = () => {
    return async dispatch => {
        const data = await GetLogo();
        dispatch({type: GET_LOGO, data: data});
    }
}