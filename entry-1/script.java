const centerImage = document.querySelector('.center-image');
const body = document.body;

// Add hover event listeners
centerImage.addEventListener('mouseenter', () => {
  body.style.backgroundColor = 'rgb(0, 0, 0)'; // Change background to black
});

centerImage.addEventListener('mouseleave', () => {
  body.style.backgroundColor = '#f0f8ff'; // Revert to original background color
});