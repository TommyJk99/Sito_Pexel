const searchInput = document.getElementById("search-input");
const searchForm = document.getElementById("search-form");
const gallery = document.getElementById("gallery");

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const query = searchInput.value;
  fetchImages(query);
});

const fetchImages = (query) => {
  fetch("https://api.pexels.com/v1/search?query=" + query, {
    method: "GET",
    headers: {
      Authorization: "82rmgDtE1aXqVG2filAdCKchb6B1CgZDThq8diwmTt4h6TnCnmFAmjTo",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      gallery.innerHTML = "";
      for (let i = 0; i < data.photos.slice(0, 20).length; i++) {
        gallery.innerHTML +=
          /*html*/
          `<div class="col my-auto">
          <img src="${data.photos[i].src.large}" class="img-fluid mb-2">
        </div>`;
      }
    })
    .catch((error) => console.error("Error", error));
};
