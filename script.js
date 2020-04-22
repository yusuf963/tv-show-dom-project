//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.name} episode(s)`;
  console.log(episodeList)
}

window.onload = setup;



function adding (){
  a = 1;
  b = 3;
  return a + b
}
console.log(adding())
