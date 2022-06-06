import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import PopUpProduct from "./PopUpProduct";

export const RenderPopUpProduct = (data) => {
    const {clickBuyButton} = data;
    const location = useLocation();
    const [isPopUp, setPopUp] = useState(false);
    const [dataPopUp, setDataPopUp] = useState({});

    const allproducts = useSelector(state => {
        return state.data.products;
    })

    const findProduct = (pathname) => {
        let splitLink = pathname.split("/").filter((e) => {return e !== ""});
        let products = allproducts.filter((e) => {
            let productsSplitLink = e.link.split("/");
            let productsId = productsSplitLink[productsSplitLink.length - 1];
            return productsId == splitLink[splitLink.length-2];
        });
        products = products[0];
        let product = products.products.filter((e) => {
            let productSplitLink = e.link.split("/");
            let productId = productSplitLink[productSplitLink.length - 1];
            return productId == splitLink[splitLink.length-1];
        });
        product = product[0];
        setDataPopUp({
            productsId: products._id,
            productId: product._id,
            productsLink: products.link,
            type: product.type,
            index: parseInt(product.link.slice(1)) + 1,
            name: product.name,
            price: product.price,
            description: product.description,
            weight: product.weight,
            image: product.largeImage,
            setPopUp: setPopUp
        })
        setPopUp(true);
    }
    useEffect(() => {
        findProduct(location.pathname);
    }, [allproducts.length])

    return isPopUp && dataPopUp && (
                        <PopUpProduct
                            productsId={dataPopUp.productsId} 
                            productId={dataPopUp.productId}
                            productsLink={dataPopUp.productsLink}
                            type={dataPopUp.type}
                            index={dataPopUp.index}
                            name={dataPopUp.name}
                            price={dataPopUp.price}
                            description={dataPopUp.description}
                            weight={dataPopUp.weight}
                            image={dataPopUp.image}
                            setPopUp={dataPopUp.setPopUp}
                            clickBuyButton={clickBuyButton}
                        />
                    )
}

export default RenderPopUpProduct;