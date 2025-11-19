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

test('initializeTimes', () => {
  expect(initializeTimes(new Date())).not.toHaveLength(0);
})

const todayTimes = initializeTimes(new Date());
const firstTime = todayTimes[0];
const todayTimes2 = todayTimes.slice(1);

test('updateTimes remove', () => {
  expect(updateTimes(todayTimes, { type: "remove", payload: firstTime })).toEqual(todayTimes2);
})

test('updateTimes reset', () => {
  expect(updateTimes(todayTimes, { type: "reset", payload: firstTime })).not.toHaveLength(0);
})
