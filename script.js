//You can edit ALL of the code here
let tvShows = getAllShows() 
 console.dir(tvShows)
let  filteredEpisode ;
 const header = document.getElementById("header");
 let selectionBar = document.getElementById("selection-bar");
 let selectionShowsBar = document.getElementById("selection-shows-bar")
//const allEpisodes = getAllEpisodes();
let allEpisodes 
fetch(`https://api.tvmaze.com/shows/20/episodes`)
.then(Response => Response.json())
.then(data =>{
    allEpisodes = data
  //console.log(data)
})
  .catch(error => console.error("Sorry for the terrible time"))

function setup() {
  makePageForEpisodes(allEpisodes);
  //console.log(allEpisodes)
  selection(allEpisodes);
}

function makeSingleTVShowListing(episode) {
  const episodeDiv =  document.createElement("div")
  let banner = document.createElement("h2")
  banner.innerText = ` ${episode.name} - S${addingZero(episode.season)}E${addingZero(episode.number)}`;
  let image = document.createElement("IMG")
   episodeDiv.className = "episode"
   episodeDiv.appendChild(banner)
  image.src = episode.image.medium
  episodeDiv.appendChild(image)
  let plot = document.createElement("div")
  plot.innerHTML = episode.summary
  episodeDiv.appendChild(plot)
  return episodeDiv;
}
// adding the zero function
 function addingZero (num){
   if (num<10){
     return `0${num}`
   }else{ 
     return num.toString()
   }
 }

function makePageForEpisodes(episodeList) {
  theSearch.innerHTML =`Displaying ${episodeList.length}/${allEpisodes.length} episodes`
  const rootElem = document.getElementById("root");
  rootElem.innerHTML = '';
  
  episodeList.forEach(episode => {
    let episodeDiv = makeSingleTVShowListing(episode);
    rootElem.appendChild(episodeDiv);
    
  });

  //console.log(episodeList)
}

window.onload = setup;
 

// adding a search engine

let searchBar = document.getElementById("filter")
searchBar.addEventListener("keyup", filterNames);

function filterNames(event){
  const { value } = event.target;

   filteredEpisodes = allEpisodes.filter(
    (episode) => {
      const re = new RegExp(value, 'gi');
      return episode.name.match(re);
    }
  );
  //theSearch.innerHTML =`Displaying ${filteredEpisodes.length}/${allEpisodes.length} episodes`

  makePageForEpisodes(filteredEpisodes);
}
 
let theSearch = document.createElement("h4");
header.appendChild(theSearch);


// adding selection bar

function selection(episodeList){
  selectionBar.innerHTML = `<option>All Episodes</option>`

  episodeList.forEach(episode =>{
    selectionBar.innerHTML+=`<option> ${episode.name} - S${addingZero(episode.season)}E${addingZero(episode.number)} </option>`
    
  });

      selectionBar.addEventListener(`change`, (event) =>{
        if(event.target.value == "All Episodes" ){
        makePageForEpisodes(episodeList)
        //theSearch.innerHTML =`Displaying ${episodeList.length}/${episodeList.length} episodes`
      }else{
        let found = episodeList.filter(episode =>{

          if(event.target.value.indexOf(episode.name) > -1){
            return true
          }else{
            return false
          }

        })
        //theSearch.innerHTML =`Displaying ${found.length}/${episodeList.length} episodes`
        makePageForEpisodes(found)
        //console.log(found)

      } 
      })           
        
  }