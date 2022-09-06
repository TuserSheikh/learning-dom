const btn = document.getElementById("btn");
const input = document.getElementById("input");

const lengthEl = document.getElementById("length");
const volumeEl = document.getElementById("volume");
const massEl = document.getElementById("mass");

btn.addEventListener("click", function () {
  let value = +input.value;

  lengthEl.textContent = length(value);
  volumeEl.textContent = volume(value);
  massEl.textContent = mass(value);
});

function length(value) {
  let mtf = (value * 3.281).toFixed(3);
  let ftm = (value / 3.281).toFixed(3);

  return `${value} meters = ${mtf} feet | ${value} feet = ${ftm} meters`;
}

function volume(value) {
  let ltg = (value * 0.264).toFixed(3);
  let gtl = (value / 0.264).toFixed(3);

  return `${value} liters = ${ltg} gallons | ${value} gallons = ${gtl} liters`;
}

function mass(value) {
  let ktp = (value * 2.204).toFixed(3);
  let ptk = (value / 2.204).toFixed(3);

  return `${value} kilos = ${ktp} pounds | ${value} pounds = ${ptk} kilos`;
}
