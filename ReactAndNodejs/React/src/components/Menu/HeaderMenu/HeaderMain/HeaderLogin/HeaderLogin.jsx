import SvgLogin from "../../../../svg/SvgLogin";
import Span from "../../../../../elements/SpanElement/Span";
import { useTranslation } from 'react-i18next'
import RouteLink from "../../../../../elements/RouteLink/RouteLink";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { verifyToken } from "../../../../../Redux/Actions/verifyToken.action";

const linkEnter = "/login";

export const HeaderLogin = () => {
    const dispatch = useDispatch();
    const [login, setLogin] = useState([<SvgLogin key="svgLogin" />, <Span key="Login" value="Login" />]);
    useEffect(() => {
        if(localStorage.length === 0) {
            localStorage.setItem("login",false);
        }
        else{
            if(localStorage.getItem("login") === "true"){
                setLogin([<SvgLogin key="svgLogin" />, <button key={"logout_button"} onClick={(e)=>{e.preventDefault(); localStorage.clear(); localStorage.setItem("login",false); document.location.reload();}}><Span key="Logout" value="Logout" /></button>])
                
            }else{
                setLogin([<SvgLogin key="svgLogin" />, <Span key="Login" value="Login" />]);
            }
            //dispatch(verifyToken(localStorage.getItem("userToken")));
        }
        //console.log(JSON.parse(localStorage.getItem("login")));
        /* if(localStorage.getItem("login") === "true"){
            setLogin([<SvgLogin key="svgLogin" />, <button key={"logout_button"} onClick={(e)=>{e.preventDefault(); localStorage.clear(); localStorage.setItem("login",false); document.location.reload();}}><Span key="Logout" value="Logout" /></button>])
        }else{
            setLogin([<SvgLogin key="svgLogin" />, <Span key="Login" value="Login" />]);
        } */
    }, [])

    return(
        <div className="header-login">
            <RouteLink key={linkEnter} to={linkEnter} inner={login} className="header-login-link"/>
        </div>
    )
}

export default HeaderLogin;