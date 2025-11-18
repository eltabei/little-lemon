import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { initializeTimes, updateTimes } from './App';

test('renders Welcome', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>);
  const pElement = screen.getByText("Welcome to Little Lemon Website.");
  expect(pElement).toBeInTheDocument();
});

const defaultTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

test('initializeTimes', () => {
  expect(initializeTimes()).toEqual(defaultTimes);
})

const times2 = ["18:00", "19:00", "20:00", "21:00", "22:00"];

test('updateTimes remove', () => {
  expect(updateTimes(defaultTimes, { type: "remove", payload: "17:00" })).toEqual(times2);
})

test('updateTimes reset', () => {
  expect(updateTimes(times2, { type: "reset", payload: "17:00" })).toEqual(defaultTimes);
})
