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
    let linksEl = document.createElement("div");
    let h3El = document.createElement("h3");
    let imgEl = document.createElement("img");

    faqItemEl.classList.add("faq-item");

    // question
    questionEl.classList.add("question");

    h3El.textContent = faq.question;
    imgEl.src = "images/down-arrow.svg";
    imgEl.alt = "down arrow key";

    questionEl.appendChild(h3El);
    questionEl.appendChild(imgEl);

    // links
    linksEl.classList.add("links");

    for (let link of faq.links) {
      let linkDivEl = document.createElement("div");
      let linkAEl = document.createElement("a");

      linkDivEl.classList.add("link");

      linkAEl.textContent = link.text;
      linkAEl.href = link.link;

      linkDivEl.appendChild(linkAEl);
      linksEl.appendChild(linkDivEl);
    }

    // add to dom
    faqItemEl.appendChild(questionEl);
    faqItemEl.appendChild(linksEl);
    faqEl.appendChild(faqItemEl);
  }
}

for (let i = 0; i < data.length; i++) {
  faqItemEl[i].addEventListener("click", function () {
    const linkEl = this.lastElementChild;

    if (data[i].isOpen) {
      data[i].isOpen = false;
      this.classList.remove("open");
      linkEl.classList.remove("show");
    } else {
      linkEl.classList.add("show");
      data[i].isOpen = true;
      this.classList.add("open");
    }
  });
}
