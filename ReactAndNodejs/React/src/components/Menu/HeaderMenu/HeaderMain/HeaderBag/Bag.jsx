import RouteLink from "../../../../../elements/RouteLink/RouteLink";
import SvgBusket from "../../../../svg/SvgBusket";

export const Bag = (data) => {
    const {bagCount} = data;
    const linkToBag = "";
    const valueInLink = [<SvgBusket key='SvgBusket' />,
                    <div key='bag-count' className='bag-count'>{bagCount}</div>]
    return(
        <div className='bag'>
            <RouteLink key={linkToBag} to={linkToBag} inner={valueInLink} className="bag-link" />
        </div>
    )
}

export default Bag;