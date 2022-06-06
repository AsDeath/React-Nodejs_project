import BoxList from "../../Box/BoxList"
import HeaderBag from "./HeaderBag/HeaderBag"
import HeaderLogin from "./HeaderLogin/HeaderLogin"

import ListItemCalledDropdaown from "../../../../elements/ListElements/ListItemCalledDropdaown"
import ListItem from "../../../../elements/ListElements/ListItem"
import { useTranslation } from 'react-i18next'
import RouteLink from "../../../../elements/RouteLink/RouteLink"

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react"
import { getNavbar } from "../../../../Redux/Actions/getNavbar.action"


export const HeaderMain = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getNavbar());
    }, []);
    const navbar = useSelector(state => {
        return state.data.navbar;
    })
    return navbar.length && (
        <div className="header-main">
            <BoxList divClass="navbar"
                ulClass="navbar-list"
                //liClass="navbar-item"
                values={
                    navbar.map((e) => {
                        if(e.submenu.length) {
                            return (<ListItemCalledDropdaown key={e._id} liClass="navbar-item" values={e}/>)
                        }else{
                            return (<ListItem key={e._id} liClass="navbar-item" inner={<RouteLink to={e.link} inner={t(e.name)} />} />)
                        }
                    })
                    } />
            <HeaderLogin />
            <HeaderBag />
        </div>
    )
}

export default HeaderMain;