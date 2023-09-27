fetch("https://api.pexels.com/v1/search?query=dog", {
  method: "GET",
  headers: {
    Authorization: "82rmgDtE1aXqVG2filAdCKchb6B1CgZDThq8diwmTt4h6TnCnmFAmjTo",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error", error));

const fetchImages = (query, id) => {
  const section = document.querySelector();
};
