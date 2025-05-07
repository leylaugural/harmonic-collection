let container = document.getElementById('coffee-ground-container');

// Generate coffee grounds dynamically based on screen size
let createCoffeeGrounds = () => {
    let totalGrounds = Math.ceil(window.innerWidth * window.innerHeight / 50); // Adjust density
    for (let i = 0; i < totalGrounds; i++) {
        const ground = document.createElement('div');
        ground.classList.add('coffee-ground');
        
        // Add event listeners for hover
        ground.addEventListener('mouseover', () => {
            // Change background image on hover
            ground.style.backgroundImage = "url('new-ground.png')";
            
            if (window.navigator.vibrate) {
                window.navigator.vibrate(50); // Vibrates for 50ms
            }
            let hoverSound = new Audio('hover-sound.mp3'); // Replace with the sound file path
            hoverSound.play();

        });

        // Ensure the change persists (no need to reset on mouseout)
        container.appendChild(ground);
    }
};

// Resize listener to regenerate grounds on window resize
window.addEventListener('resize', () => {
    container.innerHTML = ''; // Clear existing grounds
    createCoffeeGrounds(); // Generate new grounds
});

// Initial generation of coffee grounds
createCoffeeGrounds();
