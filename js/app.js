let slideshow;
let searchForm;
let input;
let baseEndpoint = "https://www.reddit.com/search.json?q=";
let resultsArray = [];
let currIndex = 0;
let resetButton;

const changePhoto = () => {
  if (resultsArray[currIndex + 1].data.thumbnail) {
    currIndex++;
  } else {
    currIndex = 0;
  }
  slideshow.setAttribute("src", resultsArray[currIndex].data.thumbnail);
};
const startSlideshow = () => {
  console.log("starting slideshow");
  // start changing image every 3 seconds
  setInterval(changePhoto, 3000);
};
const getSearchResults = () => {
  // fetch from the reddit API
  fetch(`${baseEndpoint}${input.value}`)
    .then((response) => {
      return response.json();
    })
    .then((jsonData) => {
      resultsArray = jsonData.data.children;
      slideshow.setAttribute("src", resultsArray[0].data.thumbnail);
      startSlideshow();
    })
    .catch((err) => {
      console.log("there was an error fetching the results");
      console.log(err);
    });
};
document.addEventListener("DOMContentLoaded", () => {
  slideshow = document.getElementById("slideshow");
  searchForm = document.querySelector("form");
  input = document.querySelector("input");
  resetButton = document.getElementById("reset");
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // slideshow appears
    slideshow.style.display = "block";
    // hide the search form
    searchForm.style.display = "none";
    // get search results
    getSearchResults();
  });
  resetButton.addEventListener("click", () => {
    // hide slideshow
    slideshow.style.display = "none";
    // show search form
    searchForm.style.display = "block";
    resultsArray = [];
  });
});
