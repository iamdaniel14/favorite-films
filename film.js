
const MOVIE_CONTAINER=document.querySelector("#movie-container");

async function fetchApi (){

try{ 
const RESPONSE= await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=c7893f22&type=movie`);
let movieData = await RESPONSE.json();
console.log (movieData)
return movieData;
}catch (err) {
console.log ('data is not fetched');
console.error(err);
}
}

async function receiveData (){
 let data=await  fetchApi ();
showData(data);

}

function showData (data){

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
MOVIE_CONTAINER.appendChild(released)


}

receiveData ();