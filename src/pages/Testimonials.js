import Customer1 from '../assets/customer1.jpg';
import Customer2 from '../assets/customer2.jpg';
import Customer3 from '../assets/customer3.jpg';
import Customer4 from '../assets/customer4.jpg';

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

function Testimonials() {
  return (
    <>
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
    </>
  );
}

export default Testimonials;
