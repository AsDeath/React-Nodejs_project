import HeaderLogo from './HeaderLogo';
import HeaderMenu from './HeaderMenu/HeaderMenu';

export const Menu = () => {

  return (
    <header className='header'>
      <div className='header-content'>
        <HeaderLogo />
        <HeaderMenu />
      </div>
    </header>
  );
}

export default Menu;