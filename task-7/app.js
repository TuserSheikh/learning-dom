import { faqs } from "./data.js";

// dom element
const searchInputEl = document.getElementById("search-input");
const imgCrossEl = document.getElementById("img-cross");
const faqEl = document.getElementById("faq");
const faqItemEl = document.getElementsByClassName("faq-item");

// data
const data = faqs.map((faq) => ({ ...faq, isOpen: false }));

// render
render();

searchInputEl.addEventListener("keyup", function () {
  if (this.value == "") {
    imgCrossEl.style.display = "none";
  } else {
    imgCrossEl.style.display = "block";
  }
});

imgCrossEl.addEventListener("click", function () {
  searchInputEl.value = "";
  imgCrossEl.style.display = "none";
});

function render() {
  for (let faq of data) {
    let faqItemEl = document.createElement("div");
    let questionEl = document.createElement("div");
    let h3El = document.createElement("h3");
    let imgEl = document.createElement("img");

    faqItemEl.classList.add("faq-item");

    questionEl.classList.add("question");

    h3El.textContent = faq.question;
    imgEl.src = "images/down-arrow.svg";
    imgEl.alt = "down arrow key";

    questionEl.appendChild(h3El);
    questionEl.appendChild(imgEl);

    faqItemEl.appendChild(questionEl);

    faqEl.appendChild(faqItemEl);
  }
}

for (let i = 0; i < data.length; i++) {
  faqItemEl[i].addEventListener("click", function () {
    if (data[i].isOpen) {
      data[i].isOpen = false;
      this.classList.remove("open");
    } else {
      data[i].isOpen = true;
      this.classList.add("open");
    }

    console.log(data[i]);
  });
}
