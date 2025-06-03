// Prevent default scrolling with mouse or touch
document.body.addEventListener('wheel', e => e.preventDefault(), { passive: false });
document.body.addEventListener('touchmove', e => e.preventDefault(), { passive: false });

// Handle nav button clicks
document.querySelectorAll('nav button').forEach(button => {
  button.addEventListener('click', () => {
    const target = document.querySelector(button.dataset.target);

    if (target) {
      // Smooth scroll to the target section
      target.scrollIntoView({ behavior: 'smooth' });

      // Make navigation bar sticky at the top
      document.querySelector('nav').classList.add('sticky');
    }
  });
});