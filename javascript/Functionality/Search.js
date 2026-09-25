export default function Search() {
    let search = document.querySelector("#search")
    let allCards = document.querySelectorAll(".card")

    console.log(search.value)
    search.addEventListener("input", () => {
        let searchInput = search.value.toLowerCase()
        allCards.forEach(element => {

            if (isNaN(searchInput) == true) {
                if (element.dataset.name.includes(searchInput)) {
                    element.classList.remove("hidden")
                } else {
                    element.classList.add("hidden")
                }
            } else {
                if (element.dataset.id.includes(searchInput)) {
                    element.classList.remove("hidden")
                } else {
                    element.classList.add("hidden")
                }
            }

            if (searchInput == "") {
                element.classList.remove("hidden")
                return
            }


        });

    })
}