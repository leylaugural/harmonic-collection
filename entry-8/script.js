// let tiles = document.querySelectorAll('.tile');
// let fullscreenContainer = document.querySelector('.fullscreen-video-container');
// let fullscreenVideo = document.getElementById('fullscreen-video');

// let videoSources = [
//   'videos/video1.mp4',
//   'videos/video2.mp4',
//   'videos/video3.mp4',
//   'videos/video4.mp4',
//   'videos/video5.mp4',
//   'videos/video6.mp4'
// ];

// tiles.forEach((tile, index) => {
//   tile.addEventListener('mouseenter', () => {
//     console.log(`Mouse entered tile ${index}`);
//     let videoSrc = videoSources[index];
//     if (videoSrc) {
//       fullscreenVideo.src = videoSrc;
//       fullscreenContainer.style.display = 'flex';
//       fullscreenVideo.muted = true; // Ensure video is muted
//       fullscreenVideo.play().catch((e) => console.error('Error playing video:', e));
//     }
//   });

//   tile.addEventListener('mouseleave', () => {
//     console.log(`Mouse left tile ${index}`);
//     fullscreenVideo.pause();
//     fullscreenVideo.src = '';
//     fullscreenContainer.style.display = 'none';
//   });
// });

