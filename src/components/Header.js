import Logo from '../assets/Logo.svg'
import Nav from './Nav';
import { Link } from 'react-router-dom';
import HamburgerBtn from '../assets/hamburgermenu.svg';

function Header() {
  return (
    <>
      <header>
        <Link to="/">
          <img src={Logo} className="headerLogo" alt="Little Lemon Logo" />
        </Link>
        <input type="checkbox" id="hamburgerCB" />
        <label for="hamburgerCB" className="hamburgerLabel">
          <img className="HamburgerBtn" src={HamburgerBtn} alt="Header menu" />
        </label>
        <Nav className="headerNav" />
      </header>
    </>
  );
}

export default Header;
