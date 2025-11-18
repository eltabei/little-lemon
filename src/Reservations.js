import restaurant from "./restaurant.jpg";
import chef from "./restaurant chef B.jpg";
import BookingForm from "./BookingForm";
import { useLocation } from "react-router-dom";

function Reservations() {
  const location = useLocation();
  const { availableTimes } = location.state || {};

  return (
    <section className="reservations">
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <h2>Find a table for any occasion</h2>
      <section className="reservationImages">
        <img src={restaurant} width="20%" alt="Restaurant" ></img>
        <img src={chef} width="20%" alt="Restaurant Chef"></img>
      </section>

      <BookingForm availableTimes={availableTimes} />
    </section>
  );
}

export default Reservations;
