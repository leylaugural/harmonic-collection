const centerImage = document.querySelector('.center-image');
const body = document.body;
const ringImage = document.querySelector('.symbol2 img');
const coinImage = document.querySelector('.symbol3 img');

centerImage.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  centerImage.classList.toggle('clicked');

  const isDark = body.classList.contains('dark-mode');
  ringImage.style.opacity = isDark ? '1' : '0';
  ringImage.style.pointerEvents = isDark ? 'auto' : 'none';
  coinImage.style.opacity = isDark ? '1' : '0';
  coinImage.style.pointerEvents = isDark ? 'auto' : 'none';
});