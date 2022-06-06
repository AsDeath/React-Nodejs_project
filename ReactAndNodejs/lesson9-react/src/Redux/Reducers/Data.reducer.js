import { DELETE_BAG_PRODUCT, GET_ADDT_LINKS, GET_ALL_PRODUCTS, GET_BAG_PRODUCTS, GET_BRAND_LIST, GET_FOOTER_TITLES, GET_LOGO, GET_MAIN_SLIDER, GET_NAVBAR, GET_SELPHONENUM_LIST, POST_BAG_PRODUCTS } from "../action.types"

const defProducts = {
    products: [],
    mainSlider: [],
    brandList: [],
    addtLinks: [],
    navbar: [],
    selphonenumList: [],
    footerTitles: [],
    logo: [],
    bagProducts: []
}

const DataReducer = (state = defProducts, action) => {
    switch(action.type){
        case GET_ALL_PRODUCTS:
            return {...state, products: action.data};
        case GET_MAIN_SLIDER: 
            return {...state, mainSlider: action.data};
        case GET_BRAND_LIST:
            return {...state, brandList: action.data};
        case GET_ADDT_LINKS:
            return {...state, addtLinks: action.data};
        case GET_NAVBAR:
            return {...state, navbar: action.data};
        case GET_SELPHONENUM_LIST:
            return {...state, selphonenumList: action.data};
        case GET_FOOTER_TITLES:
            return {...state, footerTitles: action.data};
        case GET_LOGO: 
            return {...state, logo: action.data};
        case GET_BAG_PRODUCTS:
            return {...state, bagProducts: action.data}
        case POST_BAG_PRODUCTS:
            return {...state, bagProducts: action.data}
        case DELETE_BAG_PRODUCT:
            return {...state, bagProducts: action.data}
        default:
            return state;
    }
}

export default DataReducer;