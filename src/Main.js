import { useNavigate } from 'react-router-dom';
import RestFood from './restaurantfood.jpg';

function Main() {
  const navigate = useNavigate();

  return (
    <>
      <main>
        <section className="hero">
          <section className="heroLeft">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>Welcome to Little Lemon Website.</p>
            <button onClick={() => navigate("/reservations")}>Reserve a Table</button>
          </section>

          <img src={RestFood} alt="Restaurant Food" width="20%"></img>
        </section>

        <section className="specials">
          <h3>Specials</h3>
          <button onClick={() => navigate("/menu")}>Online Menu</button>
          {/* Use a map */}
          <section className="dish1"></section>
          <section className="dish2"></section>
          <section className="dish3"></section>
        </section>

        <section className="testimonials">
          {/* Use a map */}
          <h3>Tesimonials</h3>
        </section>

        <section className="chicago">

        </section>

      </main>
    </>
  );
}

export default Main;
