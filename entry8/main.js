
let body = document.body;



function toggleImage() {
  const tvScreen = document.getElementById("tv-screen");

  if (tvScreen.style.display === "none") {
    tvScreen.src = "imgs/test.jpeg"; 
    tvScreen.style.display = "block";
  } else {
    tvScreen.style.display = "none";
  }
}
