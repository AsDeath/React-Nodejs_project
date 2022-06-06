import Image from "../../elements/ElementImage/ElementImage";
import RouteLink from "../../elements/RouteLink/RouteLink";
import CompLogo from '../images/CompLogo.png';

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getLogo } from "../../Redux/Actions/getLogo.action";

export const HeaderLogo = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getLogo());
    }, []);
    const logo = useSelector(state => {
        return state.data.logo;
    })
    //logo.image
    return logo && (
        <div className="header-logo">
            <RouteLink key={"/"} to={""} inner={<Image src={CompLogo} alt='Logo' className="image-header-logo" />} />
        </div>
    )
}

export default HeaderLogo;