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

renderImage();

// next button
document.getElementById("next").addEventListener("click", function () {
  hideIndex = showIndex;
  showIndex = showIndex === lastIndex ? 0 : showIndex + 1;
  updateRenderImage();
});

// prev button
document.getElementById("prev").addEventListener("click", function () {
  hideIndex = showIndex;
  showIndex = showIndex === 0 ? lastIndex : showIndex - 1;
  updateRenderImage();
});

function updateRenderImage() {
  const hideImageEl = document.getElementById(hideIndex);
  const showImageEl = document.getElementById(showIndex);

  const inactiveButtonEl = document.getElementById(hideIndex + images.length);
  const activeButtonEl = document.getElementById(showIndex + images.length);

  hideImageEl.removeAttribute("class");
  showImageEl.classList.add("show");

  inactiveButtonEl.removeAttribute("class");
  activeButtonEl.classList.add("active");
}

function renderImage() {
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
      updateRenderImage();
    });

    buttonsEl.appendChild(btnEl);
  }
}
