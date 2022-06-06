import BrandListItem from "./BrandListItem";

export const BrandList = (data) => {
    const {values} = data;
    return (
        <div className='brand-list'>
            {values.map((e) => {
                return(
                    <BrandListItem key={e._id} image={e.image} link={e.link} />
                )
            })}
        </div>
    );
}

export default BrandList;