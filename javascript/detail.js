import { detailsHeader } from "./components/Header.js"
import { detailsMain } from "./components/Main.js"
import fetchData from "./Functionality/Fetch.js"
import SearchParams from "./Functionality/SearchParam.js"

const rootElement = document.querySelector("#root")
let pokemon = []

function render() {
    rootElement.innerHTML = ""
    rootElement.append(detailsHeader(pokemon))
    rootElement.append(detailsMain(pokemon))
}

async function init() {
    pokemon = await fetchData(SearchParams("id"))
    render()
}

init()