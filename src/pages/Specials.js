import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import GreekSalad from '../assets/greek salad.jpg';
import Bruchetta from '../assets/bruchetta.png';
import LemonDessert from '../assets/lemon dessert.jpg';

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

function Dishes() {
  const navigate = useNavigate();

  return (
    <>
      <section className="specials">
        <div className="specialsTop">
          <h2>Specials</h2>
          <button className="onlineMenuBtn" onClick={() => navigate("/menu")}>Online Menu</button>
        </div>
        <div className="dishContainer">
          {dishes.map(dish => (
            <div className="dish">
              <img className="dishImg" src={dish.image} alt={`Dish: ${dish.name}`} />
              <p className="dishName">{dish.name}</p>
              <p>{dish.price}</p>
              <p>{dish.info}</p>
              <Link to="/order-online">Order a delivery 🛒</Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Dishes;
