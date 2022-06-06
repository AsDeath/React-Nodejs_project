import DropdownList from "../../../Box/DropdownList";
import ListItem from "../../../../../elements/ListElements/ListItem";
import { useTranslation } from 'react-i18next'
import { useDispatch } from "react-redux";
import { deleteBagProduct } from "../../../../../Redux/Actions/deleteBagProduct.action";
import { useEffect, useState } from "react";
import { deleteSameBagProducts } from "../../../../../Redux/Actions/deleteSameBagProducts.action";
import { postBagProducts } from "../../../../../Redux/Actions/postBagProducts";


export const BagProducts = (data) => {
    const {values, isHidden} = data;
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const [counts, setCounts] = useState({});
    const [isRender, setIsRender] = useState(false);
    let count = {}
    useEffect(() => {
        setCounts({});
        setIsRender(false);
        if(values.length){
            values.map((e) => { 
                count[e.name] = (count[e.name] || 0) + 1; 
            })
        }
        setIsRender(true);
        setCounts(count);
    }, [values.length])

    const beforeListRender = () => {
        if(values.length){
            return (<div className='bag-empty pt-1 text-center'>{t("Your order")}</div>)
        }else{
            return (<div className='bag-empty pt-1 text-center'>{t("Bag is empty")}</div>)
        }
    }

    const bagProductsItems = (data, counts) => {
        let key = 0;
        const onClickDeleteSameItems = (event, productId) => {
            dispatch(deleteSameBagProducts({userId: localStorage.getItem("userId"), productId: productId}))
            //console.log(productId);
        }
        const onClickDecreaseItem = (event, productId) => {
            dispatch(deleteBagProduct({userId: localStorage.getItem("userId"), productId: productId}))
        }
        const onClickIncreaseItem = (event, productId) => {
            dispatch(postBagProducts({userId: localStorage.getItem("userId"), productId: productId}))
        }
        let rendered = {};
        return (data.map((e) => {
            if(rendered[e.name] === true) return ("")
            else{
                rendered[e.name] = true;
            }
            key++;
            return <ListItem key={key} liClass="bag-item" inner={
                        <div className="bag-item-content">
                            <div className="content-first">
                                <p className="bag-item-name">{e.name}</p>
                                <button className="bag-item-delete" onClick={(event) => {onClickDeleteSameItems(event, e._id)}}></button>
                            </div>
                            <div className="content-second flex justify-around mt-2 mb-2">
                                <div className="count-product flex">
                                    <button className="button-decrease" onClick={(event) => {onClickDecreaseItem(event, e._id)}}>-</button>
                                    <p>{counts[e.name]}</p>
                                    <button className="button-increase" onClick={(event) => {onClickIncreaseItem(event, e._id)}}>+</button>
                                </div>
                                <p>{e.price + " mdl"}</p>
                            </div>
                        </div>
                    } />
        }))
    }

    const afterListRender = () => {
        if(values.length){
            let totalPrice = 0;
            for(let i = 0; i < values.length; i++){
                totalPrice += values[i].price;
            }
            return (
                <div className="bag-total">
                    <div className="bag-total-content">
                        <p className="total-text">{t("Total")}</p>
                        <p className="total-price">{totalPrice + " mdl"}</p>
                    </div>
                    <button className="button-order">{t("ORDER")}</button>
                </div>
            )
        }else{
            return (
                <div>
                </div>
            )
        }
    }
    return isRender && (
        <DropdownList divClass="bag-products w-full" ulClass="bag-list"
            beforeList={beforeListRender()} 
            values={bagProductsItems(values, counts)}
            isHidden={isHidden}
            afterList={afterListRender()}/>
    )
}

export default BagProducts;