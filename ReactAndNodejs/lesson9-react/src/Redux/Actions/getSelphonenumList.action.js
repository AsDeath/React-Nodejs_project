import { GetSelphonenumList } from "../../Api/Api"
import { GET_SELPHONENUM_LIST } from "../action.types";

export const getSelphonenumList = () => {
    return async dispatch => {
        const data = await GetSelphonenumList();
        dispatch({type: GET_SELPHONENUM_LIST, data: data});
    }
}