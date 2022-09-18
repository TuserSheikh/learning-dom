class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  getHtml() {
    return `
    <div class="dog" id="dog" style="background-image: url(${this.avatar})">
      <img class="feedback ${this.hasBeenLiked ? "show" : ""}" id="like-image" src="images/like.png" alt="like image" />
      <img class="feedback ${
        this.hasBeenSwiped ? "show" : ""
      }" id="nope-image" src="images/nope.png" alt="nope image" />
      <div class="dog-info">
        <h1><span id="dog-name">${this.name}</span>, <span id="dog-age">${this.age}</span></h1>
        <p id="dog-bio">${this.bio}</p>
      </div>
    </div>`;
  }
}
export { Dog };
