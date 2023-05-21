document.addEventListener("DOMContentLoaded", function () {
  const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
  const apiUrl = "https://api.giphy.com/v1/gifs/random";

  const searchForm = document.querySelector("#searchForm");
  const categoryInput = document.querySelector("#categoryInput");
  const gifContainer = document.querySelector("#gifContainer");
  const deleteAllButton = document.querySelector("#deleteAllButton");

  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const category = categoryInput.value.trim();
    if (category !== "") {
      fetchRandomGif(category);
    }
    categoryInput.value = "";
  });

  function fetchRandomGif(category) {
    const url = `${apiUrl}?api_key=${apiKey}&tag=${category}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.data && data.data.images) {
          const imageUrl = data.data.images.original.url;
          const gifElement = createGifElement(imageUrl, category);
          gifContainer.appendChild(gifElement);
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }

  function createGifElement(imageUrl, category) {
    const gifElement = document.createElement("div");
    gifElement.classList.add("gif");

    const imgElement = document.createElement("img");
    imgElement.src = imageUrl;
    gifElement.appendChild(imgElement);

    const categoryElement = document.createElement("span");
    categoryElement.textContent = category;
    gifElement.appendChild(categoryElement);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    gifElement.appendChild(deleteButton);

    deleteButton.addEventListener("click", function () {
      gifElement.remove();
    });

    return gifElement;
  }

  deleteAllButton.addEventListener("click", function () {
    while (gifContainer.firstChild) {
      gifContainer.firstChild.remove();
    }
  });
});
