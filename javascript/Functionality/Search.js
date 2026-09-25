export default function Search () {
    let search = document.querySelector("#search")
    let allCards = document.querySelectorAll(".card")
    
    console.log(search.value)
    search.addEventListener("input", () => {
        let searchInput = search.value.toLowerCase()
        allCards.forEach(element => {
            
            if (searchInput == "") {
                element.classList.remove("hidden")
                return
            }

            if (element.dataset.name.includes(searchInput)) {
                element.classList.remove("hidden")
            } else {
                element.classList.add("hidden")
            }
        });

    })
}