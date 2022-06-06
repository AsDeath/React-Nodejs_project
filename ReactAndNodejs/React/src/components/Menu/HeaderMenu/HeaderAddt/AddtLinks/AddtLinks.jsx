import List from "../../../../../elements/ListElements/List";
import ListItem from "../../../../../elements/ListElements/ListItem";
import { useTranslation } from 'react-i18next'
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";



export const AddtLinks = (data) =>{
    const {i18n} = useTranslation();
    const {values} = data;
    const location = useLocation();

    const getPath = () => {
        let splitLink = location.pathname.split("/").filter((e) => {return e !== ""});
        if(splitLink[0] === "en" || splitLink[0] === "ro" || splitLink[0] === "ru"){
            return splitLink.slice(1).map((e) => { return "/" + e});
        }else{
            return splitLink.map((e) => { return "/" + e});
        }
    }
    useEffect(() => {
        let splitLink = location.pathname.split("/").filter((e) => {return e !== ""});
        if(splitLink[0] === "en" || splitLink[0] === "ro" || splitLink[0] === "ru"){
            let lng = splitLink[0].charAt(0).toUpperCase() + splitLink[0].charAt(1);
            i18n.changeLanguage(lng);
        }
    }, []);

    return(
        <List ulClass="addt-links" 
        //liClass="addt-links-item" 
        values={
            values.map((e) => {
                return (<ListItem key={e._id} liClass="addt-links-item" inner={<Link 
                    onClick={() => {
                        i18n.changeLanguage(e.name);
                    }} 
                    to={e.link + getPath()}>{e.name}</Link>} />)
            })
        } />
    )
}
export default AddtLinks;