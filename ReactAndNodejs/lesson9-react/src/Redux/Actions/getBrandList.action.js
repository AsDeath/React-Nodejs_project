import { GetBrandList } from "../../Api/Api"
import { GET_BRAND_LIST } from "../action.types";


export const getBrandList = () => {
    return async dispatch => {
        const data = await GetBrandList();
        dispatch({type: GET_BRAND_LIST, data: data});
    }
}