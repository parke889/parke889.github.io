
let body = document.body;

function turnonlight() {
  body.classList.toggle("light");
  button.classList.toggle("buttonOn");
}

let button = document.querySelector(".button");
button.addEventListener("click", turnonlight);