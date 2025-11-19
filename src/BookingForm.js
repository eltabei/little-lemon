import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const today = new Date().toISOString().split('T')[0];

  // const [reservationDate, setReservationDate] = useState(today);
  // const [reservationDate, setReservationDate] = useState("");
  // const [reservationTime, setReservationTime] = useState(availableTimes[0]);
  // const [noOfGuests, setNoOfGuests] = useState("1");
  // const [noOfGuests, setNoOfGuests] = useState("");
  // const [occasion, setOccasion] = useState("");

  const [formData, setFormData] = useState({
    reservationDate: "", reservationTime: availableTimes[1], noOfGuests: "", occasion: ""
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const formRef = useRef(null);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({type: "remove", payload: formData.reservationTime, date: formData.reservationDate });
    if (submitForm(formData)) {
      navigate("/confirm", { state: formData });
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (formRef.current) {
      const isValid = formRef.current.checkValidity();
      setIsFormValid(isValid);
    }
  }

  return (
      <>
      <form className="reserveForm" ref={formRef} onSubmit={handleSubmit} >
          <label for="res-date">Choose date</label>
          <input type="date" id="res-date" min={today} name="reservationDate" required value={formData.reservationDate} onChange={e => {
            // setReservationDate(e.target.value);
            handleChange(e);
            dispatch({ type: "reset", payload: formData.reservationTime, date: e.target.value });
          }} />
          <label for="res-time">Choose time</label>
          <select id="res-time" required name="reservationTime" value={formData.reservationTime} onChange={e => {
            // setReservationTime(e.target.value);
            handleChange(e);
          }}>
            {availableTimes.map(t => <option key={t}>{t}</option>)}
          </select>
        <label for="guests">Number of guests</label>
        <input type="number" required value={formData.noOfGuests} name="noOfGuests" placeholder="1" min="1" max="10" id="guests" onChange={e => {
          // setNoOfGuests(e.target.value)
          handleChange(e);
        }} />
        <label for="occasion">Occasion</label>
        <select id="occasion" value={formData.occasion} name="occasion" onChange={e => {
          // setOccasion(e.target.value)
          handleChange(e);
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
