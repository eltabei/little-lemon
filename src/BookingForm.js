import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const today = new Date().toISOString().split('T')[0];
  // const [reservationDate, setReservationDate] = useState(today);
  const [reservationDate, setReservationDate] = useState("");
  const [reservationTime, setReservationTime] = useState(availableTimes[0]);
  // const [noOfGuests, setNoOfGuests] = useState("1");
  const [noOfGuests, setNoOfGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const formRef = useRef(null);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({type: "remove", payload: reservationTime, date: reservationDate });
    const formData = { reservationDate, reservationTime, noOfGuests, occasion };
    if (submitForm(formData)) {
      navigate("/confirm", { state: formData });
    }
  }

  function handleChange() {
    if (formRef.current) {
      const isValid = formRef.current.checkValidity();
      setIsFormValid(isValid);
    }
  }

  return (
      <>
      <form className="reserveForm" ref={formRef} onSubmit={handleSubmit} >
          <label for="res-date">Choose date</label>
          <input type="date" id="res-date" min={today} required value={reservationDate} onChange={e => {
            setReservationDate(e.target.value);
            handleChange();
            dispatch({ type: "reset", payload: reservationTime, date: e.target.value });
          }} />
          <label for="res-time">Choose time</label>
        <select id="res-time" required value={reservationTime} onChange={e => {
          setReservationTime(e.target.value);
          handleChange();
        }}>
            {availableTimes.map(t => <option key={t}>{t}</option>)}
          </select>
        <label for="guests">Number of guests</label>
        <input type="number" required value={noOfGuests} placeholder="1" min="1" max="10" id="guests" onChange={e => {
          setNoOfGuests(e.target.value)
          handleChange();
        }} />
        <label for="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={e => {
          setOccasion(e.target.value)
          handleChange();
        }}>
          <option></option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make your reservation" disabled={!isFormValid} />
      </form>
    </>
  );
}

export default BookingForm;
