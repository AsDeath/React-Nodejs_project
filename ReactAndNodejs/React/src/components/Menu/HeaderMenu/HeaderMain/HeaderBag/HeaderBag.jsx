import { useState } from "react";
import Bag from "./Bag";
import BagProducts from "./BagProducts"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getBagProducts } from "../../../../../Redux/Actions/getBagProducts.action";

export const HeaderBag = () => {
    const [isHidden, setHidden] = useState(true);
    const [bagCount, setBagCount] = useState(0);
    const dispatch = useDispatch();
    const bagProducts = useSelector((state) => {
        if(bagCount !== state.data.bagProducts.length) setBagCount(state.data.bagProducts.length);
        return state.data.bagProducts;
    })
    useEffect(() => {
        if(localStorage.getItem("login") === "true"){
            dispatch(getBagProducts(localStorage.getItem("userId")));
        } 
    }, [])
    return (
        <div className='header-bag'
            onMouseEnter={()=>{
                setHidden(false);
            }}
            onMouseLeave={()=>{
                setHidden(true);
            }}
        >
            <Bag bagCount={bagCount} />
            <BagProducts values={bagProducts} isHidden={isHidden}/>
        </div>
    )
}

export default HeaderBag;