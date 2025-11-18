import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingForm({ availableTimes, dispatch }) {
  const [reservationDate, setReservationDate] = useState("");
  const [reservationTime, setReservationTime] = useState(availableTimes[0]);
  const [noOfGuests, setNoOfGuests] = useState("1");
  const [occasion, setOccasion] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({type: "remove", payload: reservationTime });
    navigate("/");
  }

  return (
      <>
        <form className="reserveForm" onSubmit={handleSubmit} >
          <label for="res-date">Choose date</label>
          <input type="date" id="res-date" value={reservationDate} onChange={e => {
            setReservationDate(e.target.value);
            dispatch({ type: "reset", payload: reservationTime });
          }} />
          <label for="res-time">Choose time</label>
          <select id="res-time" value={reservationTime} onChange={e => setReservationTime(e.target.value)}>
            {availableTimes.map(t => <option>{t}</option>)}
          </select>
        <label for="guests">Number of guests</label>
        <input type="number" value={noOfGuests} placeholder="1" min="1" max="10" id="guests" onChange={e => setNoOfGuests(e.target.value)} />
        <label for="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
          <option></option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make your reservation" />
      </form>
    </>
  );
}

export default BookingForm;
