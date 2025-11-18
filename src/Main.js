import { useState, Link } from 'react';
import { useNavigate } from 'react-router-dom';
import RestFood from './restaurantfood.jpg';
// import Reservations from './Reservations';

function Main() {
  const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
  const dishes = [
    {
      image: "",
      name: "Greek salad",
      price: "$12.99",
      info: "The famous greek salad of crispy letuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
    },

    {
      image: "",
      name: "Bruchetta",
      price: "$5.99",
      info: "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
    },

    {
      image: "",
      name: "Lemon Dessert",
      price: "$5.00",
      info: "This comes straight from grandma's reipe book, every last ingredient has been sourcede and is as authentic as can be imagined."
    }
  ]

  const navigate = useNavigate();

  return (
    <>
      <main>
        <section className="hero">
          <section className="heroLeft">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>Welcome to Little Lemon Website.</p>
            <button onClick={() => navigate("/reservations", { state: { availableTimes: availableTimes }})}>Reserve a Table</button>
            {/* <Link className="reserveATable" to="/reservations" state={{ availableTimes: availableTimes }}>Reserve a Table</Link> */}
            {/* <Link className="reserveATable" to="/reservations" state={{ availableTimes }}>Reserve a Table</Link> */}
          </section>

          <img src={RestFood} alt="Restaurant Food" width="20%"></img>
        </section>

        <section className="specials">
          <h3>Specials</h3>
          <button onClick={() => navigate("/menu")}>Online Menu</button>
          {dishes.map(dish => {
            return <>
              <p>{dish.name}</p>
              <p>{dish.price}</p>
              <p>{dish.info}</p>
            </>
          })}
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
