//You can edit ALL of the code here
const allEpisodes = getAllEpisodes();

function setup() {
  makePageForEpisodes(allEpisodes);
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

 function addingZero (num){
   if (num<10){
     return `0${num}`
   }else{ 
     return num.toString()
   }
 }

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.innerHTML = '';
  
  episodeList.forEach(episode => {
    let episodeDiv = makeSingleTVShowListing(episode);
    rootElem.appendChild(episodeDiv);
    
  });

  console.log(episodeList)
}

window.onload = setup;
 

// adding a search engine

let searchBar = document.getElementById("filter")
searchBar.addEventListener("keyup", filterNames);

function filterNames(event){
  const { value } = event.target;

  const filteredEpisodes = allEpisodes.filter(
    (episode) => {
      const re = new RegExp(value, 'gi');
      return episode.name.match(re);
    }
  );

  makePageForEpisodes(filteredEpisodes);
}