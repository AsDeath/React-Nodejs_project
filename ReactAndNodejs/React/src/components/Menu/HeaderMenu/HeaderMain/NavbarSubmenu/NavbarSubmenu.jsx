import DropdownList from "../../../Box/DropdownList";
import ListItem from "../../../../../elements/ListElements/ListItem";
import { useTranslation } from 'react-i18next'
import RouteLink from "../../../../../elements/RouteLink/RouteLink";

export const NavbarSubmenu = (data) => {
    const {values, isHidden} = data;
    const {t} = useTranslation();
    return(
        <DropdownList divClass="navbar-submenu"
            ulClass="navbar-submenu-list"
            //liClass="navbar-submenu-item" 
            values={
                values.map((e) => {
                    return (<ListItem key={e._id} liClass="navbar-submenu-item"
                        inner={<RouteLink to={e.link} inner={t(e.name)} />}
                    />)
                })
            } 
            isHidden={isHidden} />
    )
}

export default NavbarSubmenu;