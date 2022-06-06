import SvgFacebook from "../../../svg/SvgFacebook";
import SvgInstagram from "../../../svg/SvgInstagram";
import SvgYoutube from "../../../svg/SvgYoutube";

import pays from '../../../images/pays.png'

const SwitchSvg = (type) => {
    switch(type){
        case "Facebook":
            return <SvgFacebook fill="#dfdfdf" width="34px" height="34px" />;
        case "Instagram":
            return <SvgInstagram fill="#dfdfdf" width="28px" height="28px" />;
        case "Youtube":
            return <SvgYoutube fill="#dfdfdf" width="38px" height="38px" />;
        default:
            return undefined;
    }
}

export const FooterAdd = (data) => {
    const {values} = data;
    return (
        <div className="footer-add flex justify-center">
            <img className='h-10 w-15' src={pays} alt='pays'/>
            {values.map((e) => {
                return (
                    <a key={e.type} className='ml-2 mr-2 flex items-center' href={e.link}>
                        {
                            SwitchSvg(e.type)
                        }
                    </a>
                )
            })}
        </div>
    )
}

export default FooterAdd;