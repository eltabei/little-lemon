import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Booking from "./Booking";
import ConfirmedBooking from "./ConfirmedBooking";
import { submitAPI } from './api.js';

const mockTimes = ["17:00", "18:00", "19:00"];
const mockDispatch = jest.fn();
const mockSubmitForm = jest.fn();

function submitForm(formData) {
  return submitAPI(formData);
}

test('Renders the BookingForm heading', () => {
  render(
    <MemoryRouter>
      <Booking availableTimes={["17:00", "18:00", "19:00"]} dispatch={mockDispatch} />
    </MemoryRouter>);
  const headingElement = screen.getByText("Choose date");
  expect(headingElement).toBeInTheDocument();
})

test('Can be submitted for valid Input', () => {
  render(
    <MemoryRouter initialEntries={["/booking"]}>
      <Routes>
        <Route path="/booking" element={<Booking availableTimes={["17:00", "18:00", "19:00"]} dispatch={mockDispatch} submitForm={submitForm} />} />
        <Route path="/confirm" element={<ConfirmedBooking />} />
      </Routes>
    </MemoryRouter>);
  // select some choices so that the form is valid
  const dateInput = screen.getByLabelText("Choose date");
  const today = new Date().toISOString().split('T')[0];
  fireEvent.change(dateInput, { target: { value: today } });

  const timeInput = screen.getByLabelText("Choose time");
  fireEvent.change(timeInput, { target: { value: "17:00" } });

  const noOfGuests = screen.getByLabelText("Number of guests");
  fireEvent.change(noOfGuests, { target: { value: "1" } });

  const btn = screen.getByRole("button", { name: /Make your reservation/i });
  expect(btn).not.toHaveAttribute("disabled");
  fireEvent.click(btn);

  const pElement = screen.getByText(/Confirmed Booking/i);
  expect(pElement).toBeInTheDocument();
})

test('Cannot be submitted for invalid/missing Input', () => {
  render(
    <MemoryRouter initialEntries={["/booking"]}>
      <Routes>
        <Route path="/booking" element={<Booking availableTimes={["17:00", "18:00", "19:00"]} dispatch={mockDispatch} submitForm={mockSubmitForm} />} />
        <Route path="/confirm" element={<ConfirmedBooking />} />
      </Routes>
    </MemoryRouter>);

  // select some choices so that the form is valid
  // const dateInput = screen.getByLabelText("Choose date");
  // const today = new Date().toISOString().split('T')[0];
  // fireEvent.change(dateInput, { target: { value: today } });

  const timeInput = screen.getByLabelText("Choose time");
  fireEvent.change(timeInput, { target: { value: "17:00" } });

  const noOfGuests = screen.getByLabelText("Number of guests");
  fireEvent.change(noOfGuests, { target: { value: "1" } });

  const btn = screen.getByRole("button", { name: /Make your reservation/i });
  expect(btn).toHaveAttribute("disabled");
  fireEvent.click(btn);
  expect(mockSubmitForm).not.toHaveBeenCalled();
})

// Testing form fields
test('Form date', () => {
  render(
    <MemoryRouter initialEntries={["/booking"]}>
      <Routes>
        <Route path="/booking" element={<Booking availableTimes={mockTimes} dispatch={mockDispatch} />} />
      </Routes>
    </MemoryRouter>);
  const dateField = screen.getByLabelText("Choose date");
  expect(dateField).toHaveAttribute("type", "date");
  expect(dateField).toHaveAttribute("required");
})

test('Form time', () => {
  render(
    <MemoryRouter initialEntries={["/booking"]}>
      <Routes>
        <Route path="/booking" element={<Booking availableTimes={mockTimes} dispatch={mockDispatch} />} />
      </Routes>
    </MemoryRouter>);
  const timeSelect = screen.getByLabelText("Choose time");
  expect(timeSelect.tagName).toBe("SELECT");
  expect(timeSelect).toHaveAttribute("required");
})

test('Form No. of guests', () => {
  render(
    <MemoryRouter initialEntries={["/booking"]}>
      <Routes>
        <Route path="/booking" element={<Booking availableTimes={mockTimes} dispatch={mockDispatch} />} />
      </Routes>
    </MemoryRouter>);
  const noOfGuestsField = screen.getByLabelText("Number of guests");
  expect(noOfGuestsField).toHaveAttribute("type", "number");
  expect(noOfGuestsField).toHaveAttribute("required");
})

test('Form occasion', () => {
  render(
    <MemoryRouter initialEntries={["/booking"]}>
      <Routes>
        <Route path="/booking" element={<Booking availableTimes={mockTimes} dispatch={mockDispatch} />} />
      </Routes>
    </MemoryRouter>);
  const occasionSelect = screen.getByLabelText("Occasion");
  expect(occasionSelect.tagName).toBe("SELECT");
  expect(occasionSelect).not.toHaveAttribute("required");
})
