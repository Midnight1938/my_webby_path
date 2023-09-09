const API_URL = "https://api.themoviedb.org/3/discover/movie?api_key=109138a075c57b1df35ab2c1ff45c317&include_adult=true&sort_by=popularity.desc&page=1"
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_URL = "https://api.themoviedb.org/3/search/movie?api_key=109138a075c57b1df35ab2c1ff45c317&query="

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

// Get initial movie list
getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  showMovies(data.results);
  //   console.log(data.results);
}

function getClassRating(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

function showMovies(movies) {
  main.innerHTML = "";
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
        <img
          src="${IMG_PATH + poster_path}" alt="${title}"/>
        <div class="movie-info">
          <h3 id="title">${title}</h3>
          <span class="${getClassRating(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>
      `;
    main.appendChild(movieEl);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevents the page from refreshing
  const searchTerm = search.value;
  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_URL + searchTerm);
    search.value = "";
  } else {
    window.location.reload();
  }
});
