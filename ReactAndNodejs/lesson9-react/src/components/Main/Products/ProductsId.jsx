import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import RenderPopUpProduct from "../RenderPopUpProduct";
import ProductItem from "./ProductItem";

export const ProductsId = (data) => {
    const {clickBuyButton} = data;
    const location = useLocation();
    const [typeProducts, setTypeProducts] = useState();
    const allproducts = useSelector(state => {
        return state.data.products;
    })

    useEffect(() => {
        let splitPath = location.pathname.split("/");
        let regEx = /^[/][a-z]{2}[/]products[/][0-9]+$/
        let id = splitPath[splitPath.length-2];
        if(regEx.test(location.pathname)){
            id = splitPath[splitPath.length-1];
        }/* else{
            id = splitPath[splitPath.length-2];
        } */

        for(let i = 0; i < allproducts.length; i++){
            let splitLink = allproducts[i].link.split("/");
            if(id === splitLink[splitLink.length-1]){
                setTypeProducts(allproducts[i]);
                break;
            }
        }
    }, [location.pathname])
    
    return allproducts.length && typeProducts && (
        <div className="products-id grid w-3/4 m-auto mt-36">
            {typeProducts.products.map((e) => {
                return (
                    <ProductItem key={e._id} product={e} clickBuyButton={clickBuyButton} popUpLink={typeProducts.link + e.link}/>
                )
            })}
            <Routes>
                <Route exact path="/:id2" element={<RenderPopUpProduct key={"popup"} allproducts={allproducts} clickBuyButton={clickBuyButton} />} />
            </Routes>
        </div>
    )
}

export default ProductsId;