import OtherSliders from "../OtherSliders/OtherSliders";

export const Products = (data) => {
    const {clickBuyButton} = data
    return(
        <div>
            <div className="mt-48"></div>
            <OtherSliders clickBuyButton={clickBuyButton}/>
        </div>
    )
}

export default Products;