const poke_container = document.getElementById("poke-container");
const pokemon_count = 200;
const cnt_dsp = 200;
const colors = {
  fire: "#ed8796",
  grass: "#a6da95",
  electric: "#7dc4e4",
  water: "#8aadf4",
  ground: "#f4dbd6",
  rock: "#5b6078",
  fairy: "#f5bde6",
  poison: "#8bd5ca",
  bug: "#eed49f",
  dragon: "#f0c6c6",
  psychic: "#eed49f",
  flying: "#91d7e3",
  fighting: "#b8c0e0",
  normal: "#cad3f5",
};

const main_types = Object.keys(colors);

const fetchPokemons = async () => {
  for (let i = 1 + cnt_dsp; i <= cnt_dsp + pokemon_count; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  createPokemonCard(data);
};

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");

  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const id = pokemon.id.toString().padStart(3, "0");

  const poke_types = pokemon.types.map((type) => type.type.name);
  const type = main_types.find((type) => poke_types.indexOf(type) > -1);
  const color = colors[type];

  pokemonEl.style.backgroundColor = color;

  const defaultImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
  const shinyImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png`;

  const pokemonInnerHTML = `
    <div class="img-container">
        <img src="${defaultImageUrl}" alt="${name}">
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type}</span> </small>
    </div>
    `;

  pokemonEl.innerHTML = pokemonInnerHTML;

  pokemonEl.addEventListener("mouseenter", () => {
    const img = pokemonEl.querySelector("img");
    img.src = shinyImageUrl;
  });

  pokemonEl.addEventListener("mouseleave", () => {
    const img = pokemonEl.querySelector("img");
    img.src = defaultImageUrl;
  });

  poke_container.appendChild(pokemonEl);
};

fetchPokemons();
