import { getDog, getDogNotFoundHtml } from "./utils.js";

// dom
const mainEl = document.getElementById("main");
const nopeButton = document.getElementById("nope");
const likeButton = document.getElementById("like");

// click event
likeButton.addEventListener("click", likeClicked);
nopeButton.addEventListener("click", nopeClicked);

function likeClicked() {
  if (!sleep && dog) {
    sleep = true;
    dog.hasBeenLiked = true;
    render(dog);
    renderNextDog();
  }
}

function nopeClicked() {
  if (!sleep && dog) {
    sleep = true;
    dog.hasBeenSwiped = true;
    render(dog);
    renderNextDog();
  }
}

function renderNextDog() {
  setTimeout(() => {
    sleep = false;
    dog = getDog();
    render(dog);
  }, 1000);
}

// render
function render(dog) {
  if (dog) {
    mainEl.innerHTML = dog.getHtml();
  } else {
    mainEl.innerHTML = getDogNotFoundHtml();
  }
}

// code
let sleep = false;
let dog = getDog();
render(dog);
