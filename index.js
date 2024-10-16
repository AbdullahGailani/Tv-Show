const searchBtn = document.querySelector(".search-btn");
const searchLabel = document.querySelector(".movie-name");
const movieContainer = document.querySelector(".movies-container");

const getMovies = async (movieName) => {
  const movies = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${movieName}`
  );
  //   console.log(movies.data[0].show.rating.average);
  displayInfoInHTML(movies.data);
};

const displayInfoInHTML = async (movies) => {
  movieContainer.textContent = "";
  const imagesContainerHtml = `<div class="movies-card-container"></div>`;
  movieContainer.insertAdjacentHTML("afterbegin", imagesContainerHtml);
  const movieCardContainer = document.querySelector(".movies-card-container");
  console.log(movieCardContainer);

  for (movie of movies) {
    if (movie.show.image) {
      const movieInfo = movie.show;
      console.log(movieInfo);
      const imgHtml = ` <div class="movie-card">
                          <img src="${movieInfo.image.medium}" alt="" />
                          <h1>${movieInfo.name}</h1>
                        </div>`;
      movieCardContainer.insertAdjacentHTML("afterbegin", imgHtml);
    }
    // console.log(movie.show.image.medium);
  }
};

searchBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const searchedMovieName = searchLabel.value;
  getMovies(searchedMovieName);
  searchLabel.value = "";
  console.log("done!");
});
