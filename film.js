
const MOVIE_CONTAINER=document.querySelector("#display-container");
const SEARCHED_MOVIES_DETAILS=document.querySelector("#movie-searched-container");
const SEARCHED_CONTAINER=document.querySelector('#search-container');




function showData (data){
 MOVIE_CONTAINER.innerHTML=""; //clearing the old container when i click a new movie
 let poster=document.createElement('img');
 poster.setAttribute("src", data.Poster);
 poster.classList.add('movie-poster') ;  
 MOVIE_CONTAINER.appendChild(poster);

let title=document.createElement('h1');
title.classList.add('movie-title');
title.innerHTML=data.Title;
MOVIE_CONTAINER.appendChild(title);

let director=document.createElement('P');
director.classList.add('film-director');
director.innerHTML=`Director:${data.Director}`;
MOVIE_CONTAINER.appendChild(director);

let actors=document.createElement('P');
actors.classList.add('movie-actors');
actors.innerHTML=`Actors:${data.Actors}`;
MOVIE_CONTAINER.appendChild(actors);


let plot=document.createElement('P');
plot.classList.add('plot-paragraph');
plot.innerHTML=data.Plot;
MOVIE_CONTAINER.appendChild(plot);

let writer=document.createElement('P');
writer.classList.add('movie-writer');
writer.innerHTML=data.Writer;
MOVIE_CONTAINER.appendChild(writer);


let released=document.createElement('P');
released.classList.add('release-date');
released.innerHTML=`Released date:${data.Released}`;
MOVIE_CONTAINER.appendChild(released);
}



let search =document.querySelector("#search");
let page =1;


async function fetchSearchApi (movie_name){
 try { 
const response =await fetch (`https://www.omdbapi.com/?s=${movie_name}&page=${page}&apikey=c7893f22`);
moviesData = await response.json();
if(moviesData.Response =="True")displaySearchedMovies(moviesData.Search);

}catch(err){
console.error(err);
console.log ("data was not fetched");
}
}

function displaySearchedMovies(moviesD){
SEARCHED_CONTAINER.innerHTML="";
moviesD.forEach((movie)=> {
 let sub_container=document.createElement("div");
 sub_container.classList.add("movie-container");
 sub_container.dataset.movieId=movie.imdbID;
 console.log (sub_container);


 let poster=document.createElement ("img");
 poster.classList.add("image");
 poster.setAttribute("src",movie.Poster);
 sub_container.appendChild(poster);

 let title=document.createElement ("h1")
 title.textContent=movie.Title;
 title.classList.add("movie-title");
 sub_container.appendChild(title);
 
 let year=document.createElement ("p");
 year.textContent=movie.Year;
 sub_container.appendChild(year);
SEARCHED_CONTAINER.appendChild(sub_container);

});

console.log (SEARCHED_CONTAINER);
movieDetails ()

}

function findMovie (){
let searchInput=(search.value).trim(); //trim remove the whitespace from begging and end of the string
if( searchInput.length>0) { 
SEARCHED_CONTAINER.innerHTML=""; // clearing the searched container every time when there is new input
fetchSearchApi (searchInput);
}

}


function movieDetails (){
let AllSearchedMovies=document.querySelectorAll (".movie-container");
AllSearchedMovies.forEach((movie) =>{
movie.addEventListener("click", async()=>{
console.log(movie);
search.value="";
const RESPONSE= await fetch(`https://www.omdbapi.com/?i=${movie.dataset.movieId}&apikey=c7893f22&type=movie`); //using a dataset to call a movie by Id
let movieData = await RESPONSE.json();
showData (movieData); // since is a single movie

    })
    })
    
  
}






