import HeaderAddt from "./HeaderAddt/HeaderAddt";
import HeaderMain from "./HeaderMain/HeaderMain";

export const HeaderMenu = () => {
    return(
        <div className='header-menu'>
            <HeaderAddt />
            <HeaderMain />
        </div>
    )
}

export default HeaderMenu;