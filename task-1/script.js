const homeEl = document.getElementById("home-point");
const guestEl = document.getElementById("guest-point");

let homePoint = 0;
let guestPoint = 0;

homeEl.textContent = homePoint;
guestEl.textContent = guestPoint;

function home(point) {
  homePoint += point;
  homeEl.textContent = homePoint;
  showTopScore();
}

function guest(point) {
  guestPoint += point;
  guestEl.textContent = guestPoint;
  showTopScore();
}

function showTopScore() {
  homeEl.classList.remove("top-score");
  guestEl.classList.remove("top-score");

  if (homePoint > guestPoint) {
    homeEl.classList.add("top-score");
  } else if (homePoint < guestPoint) {
    guestEl.classList.add("top-score");
  }
}
