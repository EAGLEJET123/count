// Set the target date and time
const targetDate = new Date('January 1, 2025 00:00:00').getTime();

// Function to update the current year dynamically
const updateCurrentYear = () => {
  const now = new Date();
  const currentDay = now.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  document.getElementById('currentYear').textContent = `Today is ${currentDay}`;
  document.getElementById('footerYear').textContent = now.getFullYear();
};

// Update the countdown every second
const countdown = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  if (timeLeft > 0) {
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update the DOM
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
  } else {
    // If the countdown is finished, display the message
    clearInterval(countdown);
    document.querySelector('.timer').style.display = 'none';
    document.getElementById('message').style.display = 'block';
  }
}, 1000);

// Initialize the current year and date display
updateCurrentYear();