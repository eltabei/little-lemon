import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Reservations from "./Reservations";
import BookingForm from './BookingForm';
import App from './App';

const mockDispatch = jest.fn();

test('Renders the BookingForm heading', () => {
  render(
    <MemoryRouter>
      <Reservations availableTimes={["17:00", "18:00", "19:00"]} dispatch={mockDispatch} />
    </MemoryRouter>);
  const headingElement = screen.getByText("Choose date");
  expect(headingElement).toBeInTheDocument();
})

test('Can be submitted', () => {
  render(
    <MemoryRouter initialEntries={["/reservations"]}>
      <Routes>
        <Route path="/reservations" element={<Reservations availableTimes={["17:00", "18:00", "19:00"]} dispatch={mockDispatch} />} />
        <Route path="/" element={<App />} />
      </Routes>
    </MemoryRouter>);
  const btn = screen.getByRole("button", { name: /Make your reservation/i });
  fireEvent.click(btn);
  const pElement = screen.getByText(/Welcome to Little Lemon Website/i);
  expect(pElement).toBeInTheDocument();
})
