export const ListItem = (data) => {
    const {liClass, inner} = data;
    return(
        <li className={liClass}>
            {inner}
        </li>
    )
}

export default ListItem;