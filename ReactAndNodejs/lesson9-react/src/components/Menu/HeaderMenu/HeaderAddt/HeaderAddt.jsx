import Selphonenum from "./Selphonenum/Selphonenum";
import BrandList from "./BrandList/BrandList";
import AddtLinks from "./AddtLinks/AddtLinks";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getSelphonenumList } from "../../../../Redux/Actions/getSelphonenumList.action";
import { getBrandList } from "../../../../Redux/Actions/getBrandList.action";
import { getAddtLinks } from "../../../../Redux/Actions/getAddtLinks.action";

export const HeaderAddt = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSelphonenumList());
        dispatch(getBrandList());
        dispatch(getAddtLinks());
    }, [])

    const selphonenumList = useSelector((state) => {
        return state.data.selphonenumList;
    })
    const brandList = useSelector((state) => {
        return state.data.brandList;
    })
    const addtLinks = useSelector((state) => {
        return state.data.addtLinks;
    })

    return selphonenumList.length && brandList.length && addtLinks.length && (
        <div className='header-addt'>
            <Selphonenum values={selphonenumList} />
            <BrandList values={brandList} />
            <AddtLinks values={addtLinks} />
        </div>
    )
}

export default HeaderAddt;