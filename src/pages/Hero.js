import { useNavigate } from 'react-router-dom';
import RestFood from '../assets/restaurantfood.jpg';

function Hero() {
  const navigate = useNavigate();

  return (<>
        <section className="hero">
          <section className="heroLeft">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Welcome to Little Lemon Website.</p>
            <p>We are a family owned Mditerranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button className="reserveBtn" onClick={() => navigate("/booking")}>Reserve a Table</button>
          </section>

          <section className="heroRight">
            <img className="heroRightImg" src={RestFood} alt="Restaurant Food" ></img>
          </section>
        </section>
  </>);
}

export default Hero;
