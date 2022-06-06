import List from "../../../elements/ListElements/List";

export const DropdownList = (data) => {
    const {divClass, ulClass, liClass, 
        values,
        //onMouseEnter, onMouseLeft, 
        isHidden,
        beforeList, afterList} = data;

    /* onMouseEnter();
    onMouseLeft(); */

    return (
        <div className={divClass} hidden={isHidden}>
            {beforeList}
            <List ulClass={ulClass} liClass={liClass} values={values} />
            {afterList}
        </div>
    )

}

export default DropdownList;
