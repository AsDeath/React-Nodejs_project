import { GetMainSliderData } from "../../Api/Api";
import { GET_MAIN_SLIDER } from "../action.types";


export const getMainSlider = () => {
    return async dispatch => {
        const data = await GetMainSliderData();
        dispatch({type: GET_MAIN_SLIDER, data: data});
    }
}