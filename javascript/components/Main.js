import getIDfromURL from "../Functionality/GetIDFromURL.js"

export default function Main(pokemons) {
    const basePokemonURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    const mainElement = document.createElement("main")
    mainElement.classList.add("main")
    mainElement.innerHTML = `
    <ul class="cards__container">
        ${pokemons.map(function(pokemon) {
            return `
                <li class="card" data-name="${pokemon.name}">
                    <a href="detail.html?id=${getIDfromURL(pokemon.url)}" class="card__link">
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
    const body = document.querySelector("body")
    body.style.backgroundColor = "var(--" + pokemon.types[0].type.name + "-type-color)"
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
    <section class="about">
        <h2 style="color:var(--${pokemon.types[0].type.name}-type-color);">About</h2>
        <ul class="about__list">
            <li class="about__list__item">
                <div class="item__info">
                    <img src="../assets/weight.svg" alt="Weight">
                    <p>${pokemon.weight / 10} kg</p>
                </div>
                <small>Weight</small>
            </li>
            <li class="about__list__item">
                <div class="item__info">
                    <img src="../assets/height.svg" alt="Height">
                    <p>${pokemon.height / 10} m</p>
                </div>
                <small>Height</small>
            </li>
            <li class="about__list__item">
                <div class="item__info">
                    ${pokemon.abilities.map(function (ability) {
                    return `
                    <p>${ability.ability.name}</p>
                    `
                }).join("")}
                </div>
                <small>Moves</small>
            </li>
        </ul>
    </section>

    <p class="pokemon__description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, vitae?</p>
    
    <section class="stats">
        <h3 style="color:var(--${pokemon.types[0].type.name}-type-color);">Base Stats</h3> <!-- der er højst sandsynligt en bedre måde...-->
        <div class="stats__wrapper">
            <ul class="stats__list">
                <li class="stats__name">
                    <p>HP</p>
                </li>
                <li class="stats__name">
                    <p>ATK</p>
                </li>
                <li class="stats__name">
                    <p>DEF</p>
                </li>
                <li class="stats__name">
                    <p>SATK</p>
                </li>
                <li class="stats__name">
                    <p>SDEF</p>
                </li>
                <li class="stats__name">
                    <p>SPD</p>
                </li>
            </ul>

            <ul class="stats__all">
                ${pokemon.stats.map(function (stat) {
                    return `
                    <li class="stats__entry">
                        <p>${stat.base_stat}</p>
                        <meter min="0" max="255" value="${stat.base_stat}"></meter>
                    </li>
                    `
                }).join("")}
            </ul>
        </div>
    </section>
    `
    return mainElement
}