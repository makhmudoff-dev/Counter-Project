const incrementNumber = document.querySelector('.inc-btn');
const decrementNumber = document.querySelector('.dec-btn');
const resetNumber = document.querySelector('.res-btn');
const value = document.querySelector('#counter-value');

let counter = 0;

// Increment values
incrementNumber.addEventListener('click', () => {
  counter++;
  value.innerHTML = counter;
});

// Decrement values

decrementNumber.addEventListener('click', () => {
  counter--;
  value.innerHTML = counter;
});

// reset value

resetNumber.addEventListener('click', () => {
  counter = 0;
  value.innerHTML = counter;
});
