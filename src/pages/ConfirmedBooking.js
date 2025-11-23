import { useLocation } from "react-router-dom";

function ConfirmedBooking() {
  const location = useLocation();
  const { reservationDate, reservationTime, noOfGuests, occasion } = location.state || {};

  return (
    <>
      <div className="confirmedBooking">
        <h2>Booking Confirmed</h2>
        <p>Date: {reservationDate}</p>
        <p>Time: {reservationTime}</p>
        <p>No. of Guests: {noOfGuests}</p>
        {occasion ? <p>Occasion: {occasion}</p> : ""}
      </div>
    </>
  );
}

export default ConfirmedBooking;
