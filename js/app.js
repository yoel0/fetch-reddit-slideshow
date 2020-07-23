document.addEventListener("DOMContentLoaded", function () {
  const requestURL = "https://www.reddit.com/search.json?q=cowboy_bebop";

  fetch(requestURL)
    .then(function (responseData) {
      console.log(responseData);
      return responseData.json();
    })
    .then(function (jsonData) {
      console.log(jsonData);

      let results = jsonData.data.children;
      let infoNeeded = results.map(function (imageResults) {
        let image = imageResults.data.thumbnail;
        if (image.includes("http")) {
          return image;
        }
      });
      const imageShow = document.getElementById("painindass");
      infoNeeded.forEach((image) => {
        let imageDaddy = document.createElement("img");
        imageDaddy.src = `${image}`;
        imageShow.appendChild(imageDaddy);
      });
    });
});

/// make button function
/// style my css
/// figure out to display one image
