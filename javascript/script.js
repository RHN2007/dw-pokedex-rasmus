import Header from "./components/Header.js";
import Main from "./components/Main.js";
import fetchData from "./Functionality/Fetch.js";
import Search from "./Functionality/Search.js";

const rootElement = document.querySelector("#root")
let pokemons = []


function render() {
    rootElement.innerHTML = ""
    rootElement.append(Header())
    rootElement.append(Main(pokemons))
    Search()
}

async function init() {
    pokemons = (await fetchData("?limit=151")).results
    render()
}

init()