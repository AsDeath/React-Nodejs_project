import FooterLinks from "./FooterLinks/FooterLinks";
import FooterInfo from "./FooterInfo/FooterInfo";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getFooterTitles } from "../../Redux/Actions/getFooterTitles.action";

const footerLinksData = [{
    id: 0,
    title: "Company",
    links: [{
        id: 0,
        name: "Карьера",
        link: ""
    },
    {
        id: 1,
        name: "Feedback",
        link: ""
    },
    {
        id: 2,
        name: "Contacts",
        link: ""
    }]
},
{
    id: 1,
    title: "Services",
    links: [{
        id: 0,
        name: "Client card",
        link: ""
    },
    {
        id: 1,
        name: "Corporate clients",
        link: ""
    },
    {
        id: 2,
        name: "Kids parties",
        link: ""
    },
    {
        id: 3,
        name: "Banquets",
        link: ""
    }]
},
{
    id: 2,
    title: "Delivery Terms",
    links: [{
        id: 0,
        name: "Chisinau",
        link: ""
    },
    {
        id: 1,
        name: "Balti",
        link: ""
    },
    {
        id: 2,
        name: "Cahul",
        link: ""
    },
    {
        id: 3,
        name: "Comrat",
        link: ""
    },
    {
        id: 4,
        name: "Ceadar Lunga",
        link: ""
    }]
}
]

export const FooterContent = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFooterTitles());
    }, [])

    const footerTitles = useSelector((state) => {
        return state.data.footerTitles;
    })

    return footerTitles && (
        <div className="footer-content flex justify-center pt-8 bg-[#1a1a1a] font-sans min-h-fit">
            <FooterLinks values={footerTitles} />
            <FooterInfo />
        </div>
    )
}

export default FooterContent;