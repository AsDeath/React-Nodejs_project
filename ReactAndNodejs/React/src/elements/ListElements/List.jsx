
export const List = (data) => {
    const {ulClass, 
        //liClass, 
        values} = data;
    return (
        <ul className={ulClass}>
            {values}
            {/* {values.map((e) => {
                return(
                    e
                    //{<ListItem key={e.id} liClass={liClass} inner={e} />}
                )
            })} */}
        </ul>
    )
}

export default List;