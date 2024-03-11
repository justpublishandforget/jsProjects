const dateDisplay = document.querySelector('.container h2');

const lastDate = new Date(2024, 4, 6, 11, 30);
const todaysDate = new Date();

// Calculate the difference in milliseconds
const timeDifference = lastDate - todaysDate;

// Calculate the differences in days, hours, and minutes
const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
const hoursRemaining = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutesRemaining = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

// Display the result in the selected h2 element

dateDisplay.innerHTML = `${daysRemaining} days,<br>${hoursRemaining} hours,<br>${minutesRemaining} minutes`;
