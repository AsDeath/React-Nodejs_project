import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from "react-router-dom";
import RouteLink from "../../elements/RouteLink/RouteLink";

export const PopUpProduct = (data) => {
    const {productsId, productId, productsLink, type, name, index, price, description, weight, image, setPopUp, clickBuyButton} = data;
    const {t} = useTranslation();
    const location = useLocation();
    const mount = document.getElementById("root-model");
    const el = document.createElement("div");

    const onClickClose = (e) => {
        setPopUp(false);
    }

    useEffect(() => {
        mount.appendChild(el);
        return () => mount.removeChild(el);
    }, [el, mount])

    return(
        createPortal(
        <div className="product-popup fixed z-50 border border-black md:w-5/6 lg:w-3/4 sm:w-full w-5/6 bg-[#0000008f] top-5 ml-1/10 mr-1/10 bottom-5">
            <div className="info-product w-full h-full flex">
            <div className="image-product relative bg-cover w-2/3 h-full max-w-none"  style={{backgroundImage: "url("+ image + ")"}}></div> 
            <div className="about-product w-1/3 bg-[#1b1a1b] block">
                <RouteLink to={ productsLink } inner={
                <div className="close-popup float-right cursor-pointer" onClick={onClickClose}>
                    <svg className="w-10 h-10 right-0" fill="white" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </div>} />
                <div className="flex flex-col h-5/6 justify-between ml-5 mt-16 mr-10">
                    <div className="description-product">
                        <h3 className="name font-bold text-2xl">{name}</h3>
                        <p className="description mt-2">
                            {t(type + " description " + index)}
                        </p>
                        {/* <p className="weight mt-2">{weight+ " " + t("g")}</p> */}
                    </div>
                    <div className="buy flex flex-col items-center">
                        <div className="price flex w-full justify-between">
                            <p className="total font-bold">{t("Total")+":"}</p>
                            <p className="price font-bold text-2xl">{price + " usd"}</p>
                        </div>
                        <button className="buy-button flex items-center justify-center mt-5 w-full rounded-md h-16 bg-[#ff0000] text-2xl font-bold" onClick={(event) => {console.log(clickBuyButton); clickBuyButton(event, productId)}}>
                            {t("Order")}
                            <svg className="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            </div>
        </div>
        , el)
    )
}

export default PopUpProduct;