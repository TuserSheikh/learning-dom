const btnSearchEl = document.getElementById("btn-search");
const inputEl = document.getElementById("input");

btnSearchEl.addEventListener("click", searchMovie);

function searchMovie() {
  const movieName = inputEl.value;

  console.log(movieName);

  console.log("4", env);
  console.log("5", env.OMDB_API_KEY);
}
