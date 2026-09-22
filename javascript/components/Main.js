function getIDfromURL (url) {
    return url.slice(0, -1).split("/").pop()
}

export default function Main(pokemons) {
    const basePokemonURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    const mainElement = document.createElement("main")
    mainElement.classList.add("main")
    mainElement.innerHTML = `
    <ul class="cards__container">
        ${pokemons.map(function(pokemon) {
            return `
                <li class="card">
                    <p class="card__id">#${getIDfromURL(pokemon.url).padStart(3, "0")}</p>
                    <img class="card__image" src="${basePokemonURL + getIDfromURL(pokemon.url) + ".png" }" alt="${pokemon.name}">
                    <h2 class="card__name">${pokemon.name}</h2>
                </li>
            `
        }).join("")}
    </ul>
    `

    return mainElement
}