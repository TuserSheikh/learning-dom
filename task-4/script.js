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

const imagesEl = document.getElementById("images");

let hideImageIndex = null;
let showImageIndex = 0;
let lastImageIndex = images.length - 1;

renderImage();

// next button
document.getElementById("next").addEventListener("click", function () {
  hideImageIndex = showImageIndex;
  showImageIndex = showImageIndex === lastImageIndex ? 0 : showImageIndex + 1;
  updateRenderImage();
});

// prev button
document.getElementById("prev").addEventListener("click", function () {
  hideImageIndex = showImageIndex;
  showImageIndex = showImageIndex === 0 ? lastImageIndex : showImageIndex - 1;
  updateRenderImage();
});

function updateRenderImage() {
  const hideImageEl = document.getElementById(hideImageIndex);
  const showImageEl = document.getElementById(showImageIndex);

  hideImageEl.classList.remove("show");
  hideImageEl.classList.add("hide");

  showImageEl.classList.remove("hide");
  showImageEl.classList.add("show");
}

function renderImage() {
  for (let [index, image] of images.entries()) {
    let imgEl = document.createElement("img");
    imgEl.src = image.src;
    imgEl.alt = image.alt;
    imgEl.id = index;

    if (index == showImageIndex) {
      imgEl.classList.add("show");
    } else {
      imgEl.classList.add("hide");
    }

    imagesEl.appendChild(imgEl);
  }
}
