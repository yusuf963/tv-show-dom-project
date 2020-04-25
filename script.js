//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makeSingleTVShowListing(episode) {
  const episodeDiv =  document.createElement("div")
  let ban = document.createElement("h2")
  ban.innerText = ` ${episode.name} - S${addingZero(episode.season)}E${addingZero(episode.number)}`;
  let image = document.createElement("IMG")
   episodeDiv.className = "episode"
   episodeDiv.appendChild(ban)
  image.src = episode.image.medium
  episodeDiv.appendChild(image)
  let plot = document.createElement("div")
  plot.innerHTML = episode.summary
  episodeDiv.appendChild(plot)
  return episodeDiv
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


  // create episode div
  //let episodeDiv = makeSingleTVShowListing(episodeList[2]);
 
 // add episode div to root elem
  //rootElem.appendChild(episodeDiv)
 
  episodeList.forEach(episode => {
    let episodeDiv = makeSingleTVShowListing(episode);
    rootElem.appendChild(episodeDiv)
    
  });


  
  console.log(episodeList)
}

window.onload = setup;
