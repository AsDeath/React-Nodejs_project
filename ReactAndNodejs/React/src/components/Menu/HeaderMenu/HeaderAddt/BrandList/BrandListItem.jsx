import Image from "../../../../../elements/ElementImage/ElementImage";

export const BrandListItem = (prop) => {
    const {image, link} = prop;
    return(
        <div className='brand-list-item'>
            <a href={link}>
                <Image src={image} alt={link} className="image" />
            </a>
        </div>
    )
}

export default BrandListItem;