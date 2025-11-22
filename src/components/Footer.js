import Logo from './Logo.svg';
import Nav from './Nav';

function Footer() {
  return (
    <>
      <footer>
        <img className="Logo" src={Logo} alt="Little Lemon Logo" />
        <section className="footerNavContainer">
          <h3>Navigation</h3>
          <Nav className="footerNav" />
        </section>
        <section className="contactContainer">
          <h3>Contact</h3>
          <p>Address</p>
          <p>Phone Number</p>
          <p>Email</p>
        </section>
        <section className="socialMediaContainer">
          <h3>Social Media</h3>
          <a href="https://facebook.com/example">Facebook</a>
          <a href="https://x.com/example">X</a>
          <a href="https://instagram.com/example">Instagram</a>
        </section>
      </footer>
    </>
  );
}

export default Footer;
