
// Simple smooth scroll with slower speed
document.querySelector('.begin-button').addEventListener('click', function(e) {
  e.preventDefault();
  
  const target = document.querySelector(this.getAttribute('href'));
  
  if (target) {
    // Adding a slight delay before scrolling for smoother effect
    setTimeout(function() {
      target.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start'
      });
    }, 100);
  }
});