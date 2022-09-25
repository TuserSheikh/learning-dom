const btnSearchEl = document.getElementById("btn-search");
const inputEl = document.getElementById("input");
const searchResultEl = document.getElementById("search-result");

btnSearchEl.addEventListener("click", searchMovie);

let movies = [];

async function searchMovie() {
  movies = [];

  const movieName = inputEl.value;
  const responseAllMovies = await fetch("https://www.omdbapi.com/?apikey=800a17ec&type=movie&s=" + movieName);
  const allMovies = await responseAllMovies.json();

  console.log(allMovies);

  for (let movie of allMovies.Search) {
    const responseMovie = await fetch("https://www.omdbapi.com/?apikey=800a17ec&i=" + movie.imdbID);
    const movieInfo = await responseMovie.json();
    console.log(movieInfo);

    movies.push({
      poster: movieInfo.Poster,
      title: movieInfo.Title,
      rating: movieInfo.imdbRating,
      runtime: movieInfo.Runtime,
      genre: movieInfo.Genre,
      plot: movieInfo.Plot,
    });

    render();
  }
}

function render() {
  let searchResultHtml = "";

  for (let movie of movies)
    searchResultHtml += `
      <div class="movie">
        <div class="poster">
          <img src="${movie.poster}" alt="poster of movie ${movie.title}">
        </div>
        <div class="details">
          <div class="top">
            <div class="title">${movie.title}</div>
            <div>
              <img src="images/star-svg.svg" alt="star svg icon">
              <span>${movie.rating}</span>
            </div>
          </div>
          <div class="info">
            <div class="runtime">${movie.runtime}</div>
            <div class="genre">${movie.genre}</div>
            <div class="watchlist">
              <button id="watchlist">
                <img src="images/plus-svg.svg" alt="plus svg icon">  
                Watchlist
              </button>
            </div>
          </div>
          <div class="plot">
            <p>${movie.plot}</p>
          </div>
        </div>
      </div>
  `;

  searchResultEl.innerHTML = searchResultHtml;
}
