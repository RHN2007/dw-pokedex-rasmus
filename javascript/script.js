import Header from "./components/Header.js";
import Main from "./components/Main.js";
import fetchData from "./Functionality/Fetch.js";
import Search from "./Functionality/Search.js";

const rootElement = document.querySelector("#root")
let pokemons = []
let offset = 0

let observer = new IntersectionObserver(function(entries) {
    entries.forEach(async function (entry) {
        if(entry.isIntersecting) {
            observer.unobserve(entry.target)
            offset = offset + 60
            let data = await fetchData("?limit=60&offset=" + offset)
            pokemons.push(...data.results)
            render()
        }
    })
})


function render() {
    rootElement.innerHTML = ""
    rootElement.append(Header())
    rootElement.append(Main(pokemons))
    Search()

    let fifthLastElement = document.querySelector(".card:nth-last-of-type(5)")
    console.log(fifthLastElement)
    observer.observe(fifthLastElement)
}

async function init() {
    pokemons = (await fetchData("?limit=60")).results
    render()
}

init()