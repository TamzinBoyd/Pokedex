const apiData = {
  url: "https://pokeapi.co/api/v2/",
  type: "pokemon",
  id: Math.floor(Math.random() * 115),
};

const { url, type, id } = apiData;
// saving values of the above object into a web address format
const apiUrl = `${apiData.url}${apiData.type}/${apiData.id}`;

// pass in random id to find the Pokemon matchign that name
fetch(apiUrl)
  .then((data) => data.json())
  // getting the data and for each result performing the function geberate HTML
  .then((pokemon) => generateHtml(pokemon));

const generateHtml = (data) => {
  const html = `
  <div class="name">${data.name}</div>
  <div class="details">
  <span>Height: ${data.height}</span>
  <span>Weight: ${data.weight}</span>
  </div>
  <img src=${data.sprites.front_default}>`;

  const pokemonDiv = document.querySelector(".pokemon");
  // change value to the html text, accessed from the object in the api.
  pokemonDiv.innerHTML = html;
};

const refreshPage = () => {
  window.location.reload();
};
const button = document.querySelector(".button");
button.addEventListener("click", refreshPage);
