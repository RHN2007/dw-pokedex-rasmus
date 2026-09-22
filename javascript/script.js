import Header from "./components/Header.js";
import Main from "./components/Main.js";

const rootElement = document.querySelector("#root")
let pokemons = []


function render() {
    rootElement.innerHTML = ""
    rootElement.append(Header())
    rootElement.append(Main(pokemons))
}

async function init() {
    const pokemonURL = "https://pokeapi.co/api/v2/pokemon?limit=151"
    let response = await fetch(pokemonURL)
    let data = await response.json()
    pokemons = data.results
    render()
}

init()