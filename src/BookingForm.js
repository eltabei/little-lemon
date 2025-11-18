import { useState } from "react";

function BookingForm() {
  const [reservationDate, setReservationDate] = useState("");
  const [reservationTime, setReservationTime] = useState("");
  const [noOfGuests, setNoOfGuests] = useState("1");
  const [occasion, setOccasion] = useState("");

  const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);

  return (
      <>
        <form className="reserveForm" >
          <label for="res-date">Choose date</label>
          <input type="date" id="res-date" value={reservationDate} onChange={e => setReservationDate(e.target.value)} />
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

      {/* <label>{reservationDate}</label>
      <label>{reservationTime}</label>
      <label>{noOfGuests}</label>
      <label>{occasion}</label> */}
    </>
  );
}

export default BookingForm;
