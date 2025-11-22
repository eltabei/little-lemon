import { useNavigate } from 'react-router-dom';
import RestFood from '../assets/restaurantfood.jpg';
import GreekSalad from '../assets/greek salad.jpg';
import Bruchetta from '../assets/bruchetta.png';
import LemonDessert from '../assets/lemon dessert.jpg';
import Customer1 from '../assets/customer1.jpg'
import Customer2 from '../assets/customer2.jpg'
import Customer3 from '../assets/customer3.jpg'
import Customer4 from '../assets/customer4.jpg'

function Main() {
  const navigate = useNavigate();

  const dishes = [
    {
      image: GreekSalad,
      name: "Greek salad",
      price: "$12.99",
      info: "The famous greek salad of crispy letuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
    },

    {
      image: Bruchetta,
      name: "Bruchetta",
      price: "$5.99",
      info: "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
    },

    {
      image: LemonDessert,
      name: "Lemon Dessert",
      price: "$5.00",
      info: "This comes straight from grandma's reipe book, every last ingredient has been sourcede and is as authentic as can be imagined."
    }
  ]

  const testimonials = [
    {
      rating: "5",
      image: Customer1,
      name: "Jenna",
      review: "Amazing food"
    },

    {
      rating: "4",
      image: Customer2,
      name: "Mike",
      review: "Pretty good restaurant"
    },

    {
      rating: "5",
      image: Customer3,
      name: "Nadia",
      review: "Awesome food"
    },

    {
      rating: "3",
      image: Customer4,
      name: "Chen",
      review: "Good restaurant"
    },
  ]

  return (
    <>
      <main>
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

        <section className="specials">
          <section className="specialsTop">
            <h2>Specials</h2>
            <button className="onlineMenuBtn" onClick={() => navigate("/menu")}>Online Menu</button>
          </section>
          <section className="dishContainer">
            {dishes.map(dish => (
              <section className="dish">
                <img className="dishImg" src={dish.image} alt={"Image of " + dish.name} />
                <p className="dishName">{dish.name}</p>
                <p>{dish.price}</p>
                <p>{dish.info}</p>
                <button onClick={() => navigate("/order-online")}>Order a delivery</button>
              </section>
            ))}
          </section>
        </section>

        <section className="testimonials">
          <h2>Testimonials</h2>
          <section className="testimonialsContainer">
            {testimonials.map(t => (
              <section className="testimony">
                <img src={t.image} width="70%" />
                <p>Name: {t.name}</p>
                <span className="rating" aria-label={`${t.rating} stars`}>
                  Rating: {'⭐'.repeat(t.rating)}
                </span>
                <p>Review: {t.review}</p>
              </section>
            ))}
          </section>
        </section>

        <section className="chicago">
        </section>

      </main>
    </>
  );
}

export default Main;
