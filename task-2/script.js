const passwordOneEl = document.getElementById("password-one");
const passwordTwoEl = document.getElementById("password-two");
const passwordCopyButton = document.getElementsByClassName("password-copy");

const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const passwordLength = 15;

function generatePasswords() {
  passwordOneEl.textContent = getPassword();
  passwordTwoEl.textContent = getPassword();
}

function getRandomIndex() {
  return Math.floor(Math.random() * characters.length);
}

function getPassword() {
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    password += characters[getRandomIndex()];
  }

  return password;
}

for (let i = 0; i < 2; i++) {
  passwordCopyButton[i].addEventListener("click", function () {
    navigator.clipboard.writeText(this.textContent);
  });
}
