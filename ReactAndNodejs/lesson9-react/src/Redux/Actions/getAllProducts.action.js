import { GetAllProducts } from "../../Api/Api"
import { GET_ALL_PRODUCTS } from "../action.types";


export const getAllProducts = () => {
    return async dispatch => {
        const data = await GetAllProducts();
        dispatch({type: GET_ALL_PRODUCTS, data: data});
    }
}