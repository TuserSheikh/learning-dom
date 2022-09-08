const images = [
  { src: "images/back_to_hogwarts.jpg", alt: "Back to hogwarts" },
  { src: "images/diagon_alley.jpg", alt: "Diagon alley" },
  { src: "images/dobby_the_house_elf.jpg", alt: "Dobby the house elf" },
  { src: "images/hagrid's_hut.jpg", alt: "Hagrid's hut" },
  { src: "images/platform.jpg", alt: "platform" },
  { src: "images/the_gringotts_heist.jpg", alt: "The gringotts heist" },
  { src: "images/the_riddle_house.jpg", alt: "The riddle house" },
  { src: "images/the_room_of_hidden_things.jpg", alt: "The room of hidden things" },
];

let hideIndex = null;
let showIndex = 0;
let lastIndex = images.length - 1;

render();

document.getElementById("prev").addEventListener("click", prev);
document.getElementById("next").addEventListener("click", next);

let interval = setInterval(next, 3000);

function prev() {
  hideIndex = showIndex;
  showIndex = showIndex === 0 ? lastIndex : showIndex - 1;

  restartInterval();
  updateRender();
}

function next() {
  hideIndex = showIndex;
  showIndex = showIndex === lastIndex ? 0 : showIndex + 1;

  restartInterval();
  updateRender();
}

function updateRender() {
  const hideImageEl = document.getElementById(hideIndex);
  const showImageEl = document.getElementById(showIndex);

  const inactiveButtonEl = document.getElementById(hideIndex + images.length);
  const activeButtonEl = document.getElementById(showIndex + images.length);

  hideImageEl.removeAttribute("class");
  showImageEl.classList.add("show");

  inactiveButtonEl.removeAttribute("class");
  activeButtonEl.classList.add("active");
}

function render() {
  const imagesEl = document.getElementById("images");
  const buttonsEl = document.getElementById("controll-all");

  for (let [index, image] of images.entries()) {
    // images
    let imgEl = document.createElement("img");
    imgEl.src = image.src;
    imgEl.alt = image.alt;
    imgEl.id = index;

    if (index == showIndex) {
      imgEl.classList.add("show");
    }

    imagesEl.appendChild(imgEl);

    // buttons
    let btnEl = document.createElement("button");
    btnEl.id = index + images.length;

    if (index + images.length === showIndex + images.length) {
      btnEl.classList.add("active");
    }

    btnEl.addEventListener("click", function () {
      hideIndex = showIndex;
      showIndex = index;
      restartInterval();
      updateRender();
    });

    buttonsEl.appendChild(btnEl);
  }
}

function restartInterval() {
  clearInterval(interval);
  interval = setInterval(next, 3000);
}
