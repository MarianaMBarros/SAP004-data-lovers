import { listing, nameSearch, typeSearch, listingType, orderByName, orderByWeight } from './data.js';

document.getElementById("btn-name").addEventListener("click", searchNameFilter);
document.getElementById("btn-element").addEventListener("click", searchTypeFilter);
document.getElementById("btn-order").addEventListener("click", orderNameFilter);

function renderList(pokemons) {
  const html = pokemons.map(poke => {
    return `<li><a href="./detail?num=${poke.num}"><img src="${poke.img}" alt=""> ${poke.num} ${poke.name}</a></li>`
  });
  document.getElementById("list").innerHTML = html.join("");
}

function renderType(types) {
  const html = types.map(type => {
    return `<option value="${type}">${type}</option>`
  });
  document.getElementById("select-element").innerHTML = `<option value="">Choose</option>` + html.join("");
}

function init() {
  const pokemons = listing();
  const types = listingType();
  renderList(pokemons)
  renderType(types)
}
init();

const searchName = document.getElementById("search");
function searchNameFilter() {
  const pokemonsFiltro = nameSearch(searchName.value);
  renderList(pokemonsFiltro);
}

const searchType = document.getElementById("select-element");
function searchTypeFilter() {
  const pokemonsFiltro = typeSearch(searchType.value);
  renderList(pokemonsFiltro);
}

const orderName = document.getElementById("select-order");
function orderNameFilter() {
  if (orderName.value === "name") {
    const pokemonsFiltro = orderByName();
    renderList(pokemonsFiltro);
  }
  if (orderName.value === "number") {
    const pokemonsFiltro = listing();
    renderList(pokemonsFiltro);
  }
  if (orderName.value === "weight") {
    const pokemonsFiltro = orderByWeight();
    renderList(pokemonsFiltro);
  }
}




