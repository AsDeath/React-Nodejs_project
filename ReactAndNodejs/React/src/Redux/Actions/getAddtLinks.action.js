import { GetAddtLinks } from "../../Api/Api"
import { GET_ADDT_LINKS } from "../action.types";


export const getAddtLinks = () => {
    return async dispatch => {
        const data = await GetAddtLinks();
        dispatch({type: GET_ADDT_LINKS, data: data});
    }
}