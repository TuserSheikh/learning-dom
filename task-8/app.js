const btnSearchEl = document.getElementById("btn-search");
const inputEl = document.getElementById("input");

btnSearchEl.addEventListener("click", searchMovie);

function searchMovie() {
  const movieName = inputEl.value;

  console.log(movieName);

  console.log("1", process);
  console.log("2", process.env);
  console.log("3", process.env.OMDB_API_KEY);
  console.log("4", env);
  console.log("5", env.OMDB_API_KEY);
}
