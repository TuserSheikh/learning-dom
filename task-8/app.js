const btnSearchEl = document.getElementById("btn-search");
const inputEl = document.getElementById("input");
const searchResultEl = document.getElementById("search-result");
const btnWatchlistEl = document.getElementsByClassName("btn-watchlist");

let movies = [];

btnSearchEl.addEventListener("click", searchMovie);
async function searchMovie() {
  const movieName = inputEl.value;
  const responseAllMovies = await fetch("https://www.omdbapi.com/?apikey=800a17ec&type=movie&s=" + movieName);
  const allMovies = await responseAllMovies.json();

  movies = [];

  if (allMovies.Response == "False") {
    return renderMovieNotFound();
  }

  for (let movie of allMovies.Search) {
    const responseMovie = await fetch("https://www.omdbapi.com/?apikey=800a17ec&i=" + movie.imdbID);
    const movieInfo = await responseMovie.json();

    movies.push({
      id: movieInfo.imdbID,
      poster: movieInfo.Poster,
      title: movieInfo.Title,
      rating: movieInfo.imdbRating,
      runtime: movieInfo.Runtime,
      genre: movieInfo.Genre,
      plot: movieInfo.Plot,
      isWatchList: false,
    });
  }
  return render();
}

function render() {
  let searchResultHtml = "";
  let localStorageWatchlist = JSON.parse(localStorage.getItem("movies"));

  if (localStorageWatchlist && localStorageWatchlist.length) {
    let localStorageWatchlistIds = localStorageWatchlist.map((m) => m.id);
    movies = movies.map((m) => (localStorageWatchlistIds.includes(m.id) ? { ...m, isWatchList: true } : m));
  }

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
              ${
                movie.isWatchList
                  ? `<button class="btn-watchlist">
                  <img src="images/minus-svg.svg" alt="minus svg icon">  
                  Remove
                </button>`
                  : `<button class="btn-watchlist">
                  <img src="images/plus-svg.svg" alt="plus svg icon">  
                  Watchlist
                </button>`
              }
              
            </div>
          </div>
          <div class="plot">
            <p>${movie.plot}</p>
          </div>
        </div>
      </div>
  `;

  searchResultEl.innerHTML = searchResultHtml;
  enableWatchlistBtn();
}

function renderMovieNotFound() {
  searchResultEl.innerHTML = `
    <div class="movie-not-found">
      <p>Unable to find what you're looking for. Please try another search.</p>
    </div>
  `;
}

function enableWatchlistBtn() {
  for (let i = 0; i < movies.length; i++) {
    btnWatchlistEl[i].addEventListener("click", function () {
      let localStorageWatchlist = JSON.parse(localStorage.getItem("movies"));
      let watchlistMovies = [];

      if (movies[i].isWatchList) {
        let movieId = movies[i].id;
        watchlistMovies = localStorageWatchlist.filter((m) => m.id !== movieId);
        movies[i].isWatchList = false;
      } else {
        watchlistMovies = [movies[i]];
        if (localStorageWatchlist) {
          watchlistMovies = [...watchlistMovies, ...localStorageWatchlist];
        }
        movies[i].isWatchList = true;
      }

      localStorage.setItem("movies", JSON.stringify(watchlistMovies));
      render();
    });
  }
}
