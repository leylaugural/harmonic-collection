// Select all tiles and the video player
const tiles = document.querySelectorAll('.tile');
const videoPlayer = document.getElementById('video-player');

// Add hover event listener to each tile
tiles.forEach(tile => {
  tile.addEventListener('mouseenter', () => {
    const videoSrc = tile.getAttribute('data-video'); // Get the video source
    videoPlayer.src = videoSrc; // Set the video source
    videoPlayer.style.display = 'block'; // Show the video player
    videoPlayer.play(); // Play the video
  });

  tile.addEventListener('mouseleave', () => {
    videoPlayer.pause(); // Pause the video
    videoPlayer.style.display = 'none'; // Hide the video player
  });
});
