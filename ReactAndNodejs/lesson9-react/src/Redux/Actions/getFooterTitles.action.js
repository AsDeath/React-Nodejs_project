import { GetFooterTitles } from "../../Api/Api"
import { GET_FOOTER_TITLES } from "../action.types";


export const getFooterTitles = () => {
    return async dispatch => {
        const data = await GetFooterTitles();
        dispatch({type: GET_FOOTER_TITLES, data: data});
    }
}