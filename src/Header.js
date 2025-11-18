import Logo from './Logo.svg'
import Nav from './Nav';

function Header() {
  return (
    <>
      <header>
        <a href="/home">
          <img src={Logo} className="Logo" alt="Little Lemon Logo"></img>
        </a>
        <Nav />
      </header>
    </>
  );
}

export default Header;
