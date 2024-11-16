const yearEl = document.querySelector('.year-name');
const monthEl = document.querySelector('.month-name');
const dayEl = document.querySelector('.day-name');

const fetchFullDate = new Date();
monthEl.textContent = fetchFullDate.toLocaleString('en', { month: 'long' });
dayEl.textContent = fetchFullDate.getDate();
yearEl.textContent = fetchFullDate.getFullYear();
