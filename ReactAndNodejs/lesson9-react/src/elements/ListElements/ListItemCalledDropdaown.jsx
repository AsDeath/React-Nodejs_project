import SvgArrow from "../../components/svg/SvgArrow";
import NavbarSubmenu from "../../components/Menu/HeaderMenu/HeaderMain/NavbarSubmenu/NavbarSubmenu";
import { useState } from "react";
import { useTranslation } from 'react-i18next'
import RouteLink from "../RouteLink/RouteLink";

export const ListItemCalledDropdaown = (data) => {
    const {liClass, values} = data;
    const [isHidden, setHidden] = useState(true);
    const {t} = useTranslation();
    return(
        <li className={liClass} 
            onMouseEnter={() => {
                setHidden(false);
            }}
            onMouseLeave={() => {
                setHidden(true);
            }}
        >
            {[
                <RouteLink key={values._id} to={values.link} inner={
                    [t(values.name),
                    <SvgArrow key="navbarSUmbenu-arrow" />]
                }/>,
                <NavbarSubmenu key="NavbarSubmenu" values={values.submenu} 
                    isHidden={isHidden} />
            ]}
        </li>
    )
}

export default ListItemCalledDropdaown;