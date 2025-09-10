const container = document.querySelector(".container");
const body = document.querySelector("body");
const sizeButton = document.createElement("sizeButton");

body.insertBefore(sizeButton, container);
sizeButton.textContent = "Change Grid Size";

for(let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
    square.addEventListener("mouseover", () => {square.style.backgroundColor = "blue"});
}
