let tiles = document.querySelectorAll('.tile');
let fullscreenContainer = document.querySelector('.fullscreen-video-container');
let fullscreenVideo = document.getElementById('fullscreen-video');

// List of video sources
let videoSources = [
  'video-1.mov',
  'video-2.mov',
  'videos/video3.mp4',
  'videos/video4.mp4',
  'videos/video5.mp4',
  'videos/video6.mp4'
];

// Add hover event to tiles
tiles.forEach((tile, index) => {
  tile.addEventListener('mouseenter', () => {
    let videoSrc = videoSources[index]; // Map the tile index to the video source
    if (videoSrc) {
      fullscreenVideo.src = videoSrc; // Set the video source
      fullscreenContainer.style.display = 'flex'; // Show the video container
      fullscreenVideo.play(); // Play the video
    }
  });

  tile.addEventListener('mouseleave', () => {
    fullscreenVideo.pause(); // Pause the video
    fullscreenVideo.src = ''; // Clear the video source
    fullscreenContainer.style.display = 'none'; // Hide the video container
  });
});
