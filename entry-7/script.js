let eyes = document.querySelector("#eye-left");


let recordClick = () => {
    eyes.classList.toggle("transparent");
}
eyes.addEventListener("click", recordClick);

// eyes.addEventListener("click", () => {console.log("eye clicked")});

