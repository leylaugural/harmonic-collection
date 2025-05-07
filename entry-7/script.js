document.addEventListener("mousemove", (event) => {
    const eyes = document.querySelectorAll(".eye");
    eyes.forEach((eye) => {
      const rect = eye.getBoundingClientRect();
      const eyeCenterX = rect.left + rect.width / 2;
      const eyeCenterY = rect.top + rect.height / 2;
  
      const deltaX = event.clientX - eyeCenterX;
      const deltaY = event.clientY - eyeCenterY;
  
      const angle = Math.atan2(deltaY, deltaX);
      const distance = Math.min(10, Math.sqrt(deltaX ** 2 + deltaY ** 2));
  
      const pupil = eye.querySelector(".pupil");
      pupil.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
    });
  });

 