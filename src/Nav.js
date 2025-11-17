import Logo from './Logo.svg'

function Nav() {
  return (
    <>
      <nav>
        <ul>
          <li><img src={Logo} alt="Little Lemon Logo"></img></li>
          <li><a href="/home" role="button">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/order-online">Order Online</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
