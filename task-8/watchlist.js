const searchResultEl = document.getElementById("search-result");
const btnWatchlistEl = document.getElementsByClassName("btn-watchlist");

let movies = [];

function render() {
  let watchListHtml = "";
  let localStorageWatchlist = JSON.parse(localStorage.getItem("movies"));

  if (!localStorageWatchlist || (localStorageWatchlist && !localStorageWatchlist.length)) {
    return renderWatchlistNotFound();
  }

  movies = [...localStorageWatchlist];

  for (let movie of movies)
    watchListHtml += `
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
              <button class="btn-watchlist">
                <img src="images/minus-svg.svg" alt="minus svg icon">  
                Remove
              </button>
            </div>
          </div>
          <div class="plot">
            <p>${movie.plot}</p>
          </div>
        </div>
      </div>
  `;

  searchResultEl.innerHTML = watchListHtml;
  enableRemoveWatchlistBtn();
}

function renderWatchlistNotFound() {
  searchResultEl.innerHTML = `
    <div class="watchlist-not-found">
      <p>Your watchlist is looking a little empty...</p>
      <a href="index.html">
        <img src="images/plus-svg.svg" alt="minus svg icon"> 
        Let's add some movies! 
      </a>
    </div>
  `;
}

function enableRemoveWatchlistBtn() {
  for (let i = 0; i < movies.length; i++) {
    btnWatchlistEl[i].addEventListener("click", function () {
      let localStorageWatchlist = JSON.parse(localStorage.getItem("movies"));
      let watchlistMovies = [];
      let movieId = movies[i].id;

      watchlistMovies = localStorageWatchlist.filter((m) => m.id !== movieId);
      movies[i].isWatchList = false;

      localStorage.setItem("movies", JSON.stringify(watchlistMovies));
      render();
    });
  }
}

render();
