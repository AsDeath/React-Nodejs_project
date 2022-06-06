import { Link, useLocation } from "react-router-dom"
import GetLngPath from "../GetLngPath";

export const RouteLink = (values) => {
    const {to, inner, className} = values;
    const location = useLocation();
    return (
        <Link key={GetLngPath(location.pathname) + to} to={GetLngPath(location.pathname) + to} className={className}>{inner}</Link>
    )
}

export default RouteLink;