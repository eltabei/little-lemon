import Logo from '../assets/Logo.svg'
import Nav from './Nav';
import { Link } from 'react-router-dom';
import HamburgerBtn from '../assets/hamburgermenu.svg';

function Header() {
  return (
    <>
      <header>
        <Link to="/">
          <img src={Logo} className="Logo" alt="Little Lemon Logo" />
        </Link>
        <input type="checkbox" id="menu-toggle" class="hamburgerCB" />
        <label for="menu-toggle" class="hamburgerLabel">
          <img className="HamburgerBtn" src={HamburgerBtn} />
        </label>
        <Nav className="headerNav" />
      </header>
    </>
  );
}

export default Header;
