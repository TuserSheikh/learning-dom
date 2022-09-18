import { dogs } from "./data.js";
import { Dog } from "./Dog.js";

function getDog() {
  let dog = dogs.pop();

  if (dog) {
    return new Dog(dog);
  }

  return dog;
}

function getDogNotFoundHtml() {
  return `
  <div class="dog" id="dog" style="background-image: url(images/dog-not-found.jpg)">
    <div class="dog-info">
      <h1>Not Found</h1>
      <p id="dog-bio">Dog is not availabe right now</p>
    </div>
  </div>`;
}

export { getDog, getDogNotFoundHtml };
