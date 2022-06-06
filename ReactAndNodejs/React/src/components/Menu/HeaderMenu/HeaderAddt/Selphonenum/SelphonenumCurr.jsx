import Span from "../../../../../elements/SpanElement/Span"
import SvgArrow from "../../../../svg/SvgArrow"
import { useTranslation } from 'react-i18next'

export const SelphonenumCurr = (data) => {
    const {t} = useTranslation();
    const {city, number} = data
    return(
        <div className="selphonenum-curr">
            <span>{t(city) + ": "}</span>
            <Span value={number} className="selphonenum-currnum"/>
            <span className="selphonenum-act"><SvgArrow /></span>
        </div>
    )
}

export default SelphonenumCurr;