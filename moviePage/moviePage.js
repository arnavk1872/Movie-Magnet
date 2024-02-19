
let movieID = localStorage.getItem("movieID"); 
let favMovies = JSON.parse(localStorage.getItem("favMovies")); 

const addToFavBtn = document.querySelector("#addToFav"); 
const resultGrid = document.querySelector("#result-grid"); 


if (movieID) {
          getData(movieID);
}

 async function getData(movieID) {
          const result = await fetch(
                    `http://www.omdbapi.com/?i=${movieID}&apikey=18b08d20`
          ); 
          const movieDetails = await result.json(); 
          displayMovieDetails(movieDetails);
}


const displayMovieDetails = (details) => {
          resultGrid.innerHTML = `<div class="movie-poster">
    <img src="${
              details.Poster != "N/A"
                        ? details.Poster
                        : "../images/image_not_found.png"
    }" alt="movie-poster">
</div>

<div class="movie-info">
    <h3 class="movie-title">${details.Title}</h3>
    <ul class="movie-misc-info">
        <li class="year">Year: ${details.Year}</li>
        <li class="rated">Ratings: ${details.Rated}</li>
        <li class="released">Released: ${details.Released}</li>
    </ul>

    <p class="genre"><b>Genre: </b>${details.Genre}</p>
    <p class="writer"><b>Writer: </b> ${details.Writer}</p>
    <p class="actors"><b>Actors: </b> ${details.Actors}</p>
    <p class="plot"><b>Plot: </b> ${details.Plot}</p>
    <p class="language"><b>Language: </b> ${details.Language}</p>
    <p class="awards"><b>Awards: <i class="fa-solid fa-award"></i></b> ${
              details.Awards
    }</p>
</div>`;
};


const addToFav = () => {
          addToFavBtn.textContent = "Done";
          if (favMovies.includes(movieID)) {
                    addToFavBtn.textContent = "Already Added To Favourites";
          } else {
                    favMovies.push(movieID); 

                    localStorage.setItem("favMovies",JSON.stringify(favMovies));
          }
};

addToFavBtn.addEventListener("click", addToFav);
