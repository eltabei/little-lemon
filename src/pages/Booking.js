import restaurant from "../assets/restaurant.jpg";
import chef from "../assets/restaurant chef B.jpg";
import BookingForm from "./BookingForm";

function Booking({ availableTimes, dispatch, submitForm }) {
  // const location = useLocation();
  // const { availableTimes, dispatch } = location.state || {};

  return (
    <section className="booking">
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <h3>Find a table for any occasion</h3>
      <section className="bookingImages">
        <img src={restaurant} width="20%" alt="Restaurant" ></img>
        <img src={chef} width="20%" alt="Restaurant Chef"></img>
      </section>

      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
    </section>
  );
}

export default Booking;
