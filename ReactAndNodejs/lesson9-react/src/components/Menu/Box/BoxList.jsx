import List from "../../../elements/ListElements/List";

export const BoxList = (data) => {
    const {divClass, ulClass, liClass,
        values,
        beforeList, afterList
        } = data;

    return (
        <div className={divClass}>
            {beforeList}
            <List ulClass={ulClass} liClass={liClass} values={values} />
            {afterList}
        </div>
    )

}

export default BoxList;