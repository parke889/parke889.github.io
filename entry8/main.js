
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

function toggleImage1() {
  const tvScreen = document.getElementById("tv-screen-1");

  if (tvScreen.style.display === "none") {
    tvScreen.src = "imgs/ppg.jpeg"; 
    tvScreen.style.display = "block";
  } else {
    tvScreen.style.display = "none";
  }
}

function toggleImage2() {
  const tvScreen = document.getElementById("tv-screen-2");

  if (tvScreen.style.display === "none") {
    tvScreen.src = "imgs/courage.jpeg"; 
    tvScreen.style.display = "block";
  } else {
    tvScreen.style.display = "none";
  }
}