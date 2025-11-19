import './App.css';
import { useReducer } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import { Routes, Route } from 'react-router-dom';
import Reservations from './Reservations.js';
import ConfirmedBooking from './ConfirmedBooking.js';
import { fetchAPI, submitAPI } from './api.js';

export function initializeTimes() {
  // return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const today = new Date();
  return fetchAPI(today);
}

export function updateTimes(state, action, date) {
  switch (action.type) {
    case "remove":
      return state.filter(t => t !== action.payload);
    case "reset":
      return initializeTimes(date);
    default:
      return state;
  }
}

function submitForm(formData) {
  return submitAPI(formData);
}

function App() {
  // const [availableTimes, setAvailableTimes] = useState(initializeTimes());
  const initialState = initializeTimes();
  const [availableTimes, dispatch] = useReducer(updateTimes, initialState);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Main /> } />
        <Route path="/about" />
        <Route path="/menu" />
        <Route path="/reservations" element={<Reservations availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
        <Route path="/order-online" />
        <Route path="/login" />
        <Route path="/confirm" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
