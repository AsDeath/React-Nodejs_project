import BoxList from "../../../Menu/Box/BoxList";
import ListItem from "../../../../elements/ListElements/ListItem";
import { useTranslation } from 'react-i18next'

/* const LinkItems = (data) => {
    return(
        data.map((e) => {
            return(
                <ListItem key={e.id} liClass="link-item mb-4" inner={
                        <a key={e.link} href={e.link} className='hover:text-slate-300'>{t(e.name)}</a>
                    }
                />
            )
        })
    )
}
 */
export const FooterColumns = (data) => {
    const {values} = data;
    const {t} = useTranslation();
    return(
        <div className="footer-columns flex justify-between">
            {values.map((e) => {
                return(
                <BoxList key={e._id}
                    beforeList={
                        <h2 className="title-list mb-6 text-yellow-400">{t(e.title)}</h2>
                    }
                    divClass="footer-column"
                    ulClass="link-list text-gray-600"
                    values={
                        e.links.map((el) => {
                        return(
                            <ListItem key={el._id} liClass="link-item mb-4" inner={
                                    <a href={el.link} className='hover:text-slate-300'>{t(el.name)}</a>
                                }
                            />
                        )
                        })
                    }
                />
                )
            })
            }
        </div>
    )
}

export default FooterColumns;