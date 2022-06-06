import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import PopUpProduct from "../PopUpProduct";
import { BoxSlider } from "./BoxSlider";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { postBagProducts } from "../../../Redux/Actions/postBagProducts";


export const OtherSliders = (data) => {
    const {clickBuyButton} = data
    const allproducts = useSelector(state => {
        return state.data.products;
    })


    return allproducts.length && (
        <div className='other-sliders'>
            {
                allproducts.map((e) => {
                    return (
                        <BoxSlider key={e._id} values={e} clickBuyButton={clickBuyButton} /> // findProduct={findProduct} />
                    )
                })
            }
        </div>
    )
}

export default OtherSliders;