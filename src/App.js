import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Reservations from './Reservations.js';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Main /> } />
        <Route path="/about" />
        <Route path="/menu" />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/order-online" />
        <Route path="/login" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
