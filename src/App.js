import './App.css';
import { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Main from './pages/Main.js';
import Footer from './components/Footer.js';
import Booking from './pages/Booking.js';
import ConfirmedBooking from './pages/ConfirmedBooking.js';
import { fetchAPI, submitAPI } from './utils/api.js';
import UnderConstruction from './pages/UnderConstruction.js';
import NA from './pages/NA.js';

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
        <Route path="/about" element={<UnderConstruction pageTitle="About" />} />
        <Route path="/menu" element={<UnderConstruction pageTitle="Menu" />} />
        <Route path="/booking" element={<Booking availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
        <Route path="/order-online" element={<UnderConstruction pageTitle="Order Online" />}/>
        <Route path="/login" element={<UnderConstruction pageTitle="Login" />} />
        <Route path="/confirm" element={<ConfirmedBooking />} />

        {/* This will be shown on all N/A pages */}
        <Route path="*" element={<NA />} />

        {/* redirect instead of showing component */}
        {/* <Route path="*" element={<Navigate to="/under-construction" replace />} /> */}
      </Routes>
      <Footer />
    </>
  )
}

export default App;
