import pays from '../../images/pays.png'
import { SvgFacebook } from '../../svg/SvgFacebook';
import SvgInstagram from '../../svg/SvgInstagram';
import SvgYoutube from '../../svg/SvgYoutube';
import FooterSubscribe from './FooterSubscribe/FooterSubscribe';
import FooterAdd from './FooterAdd/FooterAdd';

const footerAddData = [
    {
        id: 0,
        type: "Facebook",
        link: ""
    },
    {
        id: 1,
        type: "Instagram",
        link: ""
    },
    {
        id: 0,
        type: "Youtube",
        link: ""
    },
]

export const FooterInfo = () => {
    return(
        <div className="footer-info w-2/5 pl-3 flex flex-col justify-center">
            <FooterSubscribe />
            <FooterAdd values={footerAddData} />
        </div>
    )
}

export default FooterInfo;