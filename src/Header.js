import Logo from './Logo.svg'
import Nav from './Nav';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header>
        <Link to="/">
          <img src={Logo} className="Logo" alt="Little Lemon Logo"></img>
        </Link>
        <Nav className="headerNav" />
      </header>
    </>
  );
}

export default Header;
