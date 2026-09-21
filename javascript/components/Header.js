export default function Header() {
    let headerElement = document.createElement("header")
    headerElement.classList.add("header")

    headerElement.innerHTML = `
    <div class="header__logo">
        <img src="../assets/pokeball.svg" alt="Pokeball Logo">
        <h1>Pokédex</h1>
    </div>
    <div class="header__search">
        <search>
            <form action="">
                <img src="../assets/search.svg" alt="Search Icon">
                <input type="text" name="search" id="search">
            </form>
        </search>
        <button>
            <img src="../assets/sort.svg" alt="Sort button">
        </button>
    </div>
    `

    return headerElement
} // https://www.w3schools.com/css/tryit.asp?filename=trycss_form_icon