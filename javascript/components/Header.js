import SearchParams from "../Functionality/SearchParam.js"

export default function Header() {
    let headerElement = document.createElement("header")
    headerElement.classList.add("header")

    headerElement.innerHTML = `
    <div class="header__logo">
        <img src="../assets/pokeball.svg" alt="Pokeball Logo">
        <h1>Pokédex</h1>
    </div>
    <div class="header__search">
        <search class="search__wrapper">
            <form action="" class="search__bar">
                <img src="../assets/search.svg" alt="Search Icon">
                <input type="text" name="search" id="search" placeholder="Search">
            </form>
        </search>
        <button class="header__sort">
            <img src="../assets/sort.svg" alt="Sort button">
        </button>
    </div>
    `

    return headerElement
}

export function detailsHeader(pokemon) {
    let headerElement = document.createElement("header")
    headerElement.classList.add("header")

    headerElement.innerHTML = `
    <div class="header__top">
        <a class="header__back" href="index.html">
            <img src="../assets/arrow_back.svg" alt="Back to the main page">
            <h1>${SearchParams("name")}</h1>
        </a>
        <p>#${SearchParams("id").padStart(3, "0")}</p>
    </div>
    <div class="hero">
        <a class="arrow__link" href="http://127.0.0.1:5500/detail.html?id=1&name=bulbasaur">
            <img class="arrow__left" src="../assets/chevron.svg" alt="">
        </a>
        <img class="hero__pokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${SearchParams("id")}.png" alt="${pokemon.name}">
        <a class="arrow__link" href="http://127.0.0.1:5500/detail.html?id=2&name=${"test"}">
            <img class="arrow__right" src="../assets/chevron.svg" alt="">
        </a>
    </div>
    `

    return headerElement
}

