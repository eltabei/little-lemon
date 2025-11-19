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
          <h4>Address</h4>
          <h4>Phone Number</h4>
          <h4>Email</h4>
        </section>
        <section className="socialMediaContainer">
          <h3>Social Media Links</h3>
          <a href="https://facebook.com/example">Facebook</a>
          <a href="https://x.com/example">X</a>
          <a href="https://instagram.com/example">Instagram</a>
        </section>
      </footer>
    </>
  );
}

export default Footer;
