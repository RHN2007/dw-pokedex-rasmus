import getIDfromURL from "../Functionality/GetIDFromURL.js"

export default function Main(pokemons) {
    const basePokemonURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    const mainElement = document.createElement("main")
    mainElement.classList.add("main")
    mainElement.innerHTML = `
    <ul class="cards__container">
        ${pokemons.map(function(pokemon) {
            return `
                <li class="card">
                    <a href="detail.html?id=${getIDfromURL(pokemon.url)}&name=${pokemon.name}" class="card">
                        <p class="card__id">#${getIDfromURL(pokemon.url).padStart(3, "0")}</p>
                        <img class="card__image" src="${basePokemonURL + getIDfromURL(pokemon.url) + ".png" }" alt="${pokemon.name}">
                        <h2 class="card__name">${pokemon.name}</h2>
                    </a>
                </li>
            `
        }).join("")}
    </ul>
    `

    return mainElement
}

export function detailsMain (pokemon) {
    const root = document.querySelector("#root")
    root.style.backgroundColor = "var(--" + pokemon.types[0].type.name + "-type-color)"
    
    const mainElement = document.createElement("main")
    mainElement.classList.add("main")

    mainElement.innerHTML = `
    <div class="main__container">
    <ul class="pokemon__types">
        ${pokemon.types.map(function (types) {
            return `
            <li class="pokemon__type" style="background-color:var(--${types.type.name}-type-color);">
                <p>${types.type.name}</p>
            </li>
            `
        }).join("")}
    </ul>
    </div>
    `
    return mainElement
}