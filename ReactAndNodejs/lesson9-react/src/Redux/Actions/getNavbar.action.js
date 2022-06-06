import { GetNavbar } from "../../Api/Api"
import { GET_NAVBAR } from "../action.types";


export const getNavbar = () => {
    return async dispatch => {
        const data = await GetNavbar();
        dispatch({type: GET_NAVBAR, data: data});
    }
}