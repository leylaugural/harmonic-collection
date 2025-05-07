const centerImage = document.querySelector('.center-image');
const body = document.body;
const ring = document.querySelector('.symbol2');
const coin = document.querySelector('.symbol3');

centerImage.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  centerImage.classList.toggle('clicked');

  const isDark = body.classList.contains('dark-mode');
  ring.style.opacity = isDark ? '1' : '0';
  coin.style.opacity = isDark ? '1' : '0';
});