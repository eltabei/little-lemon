import Logo from '../assets/Logo.svg';
import Nav from './Nav';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer>
        <div className="footerLogoContainer">
          <Link to="/">
            <img src={Logo} className="footerLogo" alt="Little Lemon Logo" />
          </Link>
        </div>
        <section className="footerNavContainer">
          <h3>Navigation</h3>
          <Nav className="footerNav" />
        </section>
        <section className="contactContainer">
          <h3>Contact Us</h3>
          <p>
            <i class="fa-solid fa-location-dot"></i>
            <span> 678 Pisa Ave, Chicago, IL 60611</span>
          </p>
          <p>
            <i class="fa-solid fa-phone"></i>
            <span> (312) 593-2744</span>
          </p>
          <p>
            <i class="fa-solid fa-envelope"></i>
            <Link to="mailto:customer@littlelemon.com"> customer@littlelemon.com</Link>
          </p>
        </section>
        <section className="socialMedia">
          <h3>Follow Us</h3>
          <div className="socialMediaLinks">
            <Link to="https://facebook.com/example"><i class="fa-brands fa-facebook"></i></Link>
            <Link to="https://x.com/example"><i class="fa-brands fa-x-twitter"></i></Link>
            <Link to="https://instagram.com/example"> <i class="fa-brands fa-instagram"></i></Link>
            <Link to="https://youtube.com/@example"><i class="fa-brands fa-youtube"></i></Link>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
