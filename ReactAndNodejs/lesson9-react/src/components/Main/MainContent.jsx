import MainSlider from './MainSlider/MainSlider';
import OtherSliders from './OtherSliders/OtherSliders';
import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from 'react-router-dom';
import Products from './Products/Products';
import ProductsId from './Products/ProductsId';

import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/Actions/getAllProducts.action";
import { postBagProducts } from '../../Redux/Actions/postBagProducts';
import RenderPopUpProduct from './RenderPopUpProduct';

export const MainContent = () => {
    const dispatch = useDispatch();
    const allproducts = useSelector(state => {
        return state.data.products;
    })
    useEffect(() => {
        dispatch(getAllProducts());
    }, [])

    function clickBuyButton(event, productId) {
        if(localStorage.getItem("login") === "true"){
            dispatch(postBagProducts({userId: localStorage.getItem("userId"), productId: productId}))
        }
    }

    const Main = () => {
        return(
            <div>
                <MainSlider /> 
                <OtherSliders clickBuyButton={clickBuyButton} />
            </div>
        )
    }

    return allproducts.length && (
        <div className="main-content">
            <Routes>
                {/* <Route exact path="products/:id1/:id2" element={<RenderPopUpProduct key={"popup"} allproducts={allproducts} prevPath={prevPath} clickBuyButton={clickBuyButton} />} /> */}
                <Route exact path='products/:id/*' element={<ProductsId clickBuyButton={clickBuyButton}/>} />
                <Route exact path='products/*' element={<ProductsId clickBuyButton={clickBuyButton}/>} />
                 <Route exact path='products' element={<Products clickBuyButton={clickBuyButton} />} />
                <Route exact path='' element={<Main />} />
            </Routes>
        </div>
    )
}

export default MainContent;