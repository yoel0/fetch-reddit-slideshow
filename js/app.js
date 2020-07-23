document.addEventListener("DOMContentLoaded", function () {
  const requestURL = "https://www.reddit.com/search.json?q=rubix";

  fetch(requestURL)
    .then(function (responseData) {
      if (responseData.status === 200) return responseData.json();
      console.log(responseData);
    })
    .then(function (jsonData) {
      console.log(jsonData);

      let results = jsonData.data.children;
      let infoNeeded = results.map(function (imageResults) {
        let image = imageResults.data.thumbnail;
        return image;
      });

      const imageShow = document.getElementById("painindass");
      infoNeeded.forEach((image) => {
        let imageDaddy = document.createElement("img");
        imageDaddy.src = `${image}`;
        imageShow.appendChild(imageDaddy);
      });
    });
});

// picture hide and fade-out
// make input field searchable
// make button function go and stop
// style my css
// figure out to display one image at a time
