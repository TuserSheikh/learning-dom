const typeEl = document.getElementById("type");
const colorEl = document.getElementById("color");
const btnEl = document.getElementById("btn");
const mainEl = document.getElementById("main");

btnEl.addEventListener("click", showColorScheme);

const colors = [];

function showColorScheme() {
  const colorCode = colorEl.value.slice(1);
  const colorType = typeEl.value;
  const url = `https://www.thecolorapi.com/scheme?hex=${colorCode}&mode=${colorType}&count=7`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      colors.length = 0;
      for (const color of data.colors) {
        colors.push(color.hex.value);
      }

      let html = "";
      for (let i = 0; i < colors.length; i++) {
        html += `
          <div>
            <div class="color" style="background-color:${colors[i]}"></div>
            <div class="code">
              <p class="color-code">${colors[i]}</p>
              <button onclick="copyColorCode(${i})">Copy</button>
              <small id="${i}" class="hide">Copied!</small>
            </div>
          </div>`;
      }
      mainEl.innerHTML = html;
    });
}

function copyColorCode(index) {
  const copiedEl = document.getElementById(index);

  navigator.clipboard.writeText(colors[index]);

  copiedEl.classList.remove("hide");
  copiedEl.classList.add("show");

  setTimeout(() => {
    copiedEl.classList.add("hide");
    copiedEl.classList.remove("show");
  }, 1000);
}

showColorScheme();
