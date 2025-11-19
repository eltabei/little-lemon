import { useLocation } from "react-router-dom";

function ConfirmedBooking() {
  const location = useLocation();
  const { reservationDate, reservationTime, noOfGuests, occasion } = location.state || {};

  return (
    <>
      <section className="confirm">
        <h1>Confirmed Booking</h1>
        <p>Date: {reservationDate}</p>
        <p>Time: {reservationTime}</p>
        <p>No. of Guests: {noOfGuests}</p>
        {occasion ? <p>Occasion: {occasion}</p> : ""}
      </section>
    </>
  );
}

export default ConfirmedBooking;
