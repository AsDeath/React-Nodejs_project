import SelphonenumCurr from "./SelphonenumCurr";
import Span from "../../../../../elements/SpanElement/Span";
import DropdownList from "../../../Box/DropdownList";
import ListItem from "../../../../../elements/ListElements/ListItem";
import { useState } from "react";
import { useTranslation } from 'react-i18next'

export const Selphonenum = (data) => {
    const {t} = useTranslation();
    const {values} = data;
    const [isHidden, setHidden] = useState(true);
    return(
        <div className='selphonenum' 
            onMouseEnter={()=>{
                setHidden(false);
            }}
            onMouseLeave={()=>{
                setHidden(true);
            }}
        >
            <SelphonenumCurr city={values[0].city} number={values[0].number}/>
            <DropdownList divClass="selphonenum-dropdown"
                ulClass="selphonenum-dropdown-list"
                //liClass="selphonenum-dropdown-item"
                values={
                    values.map((e) => {
                        return <ListItem key={e._id} liClass="selphonenum-dropdown-item"
                            inner={[
                                <Span key={e._id + e.city} value={e.city} />,
                                <Span key={e._id + e.number} value={e.number}/>
                            ]}
                            />
                    })
                } 
                isHidden={isHidden}
            />
        </div>
    )
}

export default Selphonenum;