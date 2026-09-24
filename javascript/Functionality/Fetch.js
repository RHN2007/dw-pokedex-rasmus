export default async function fetchData (parameter) {
        const pokemonURL = `https://pokeapi.co/api/v2/pokemon/${parameter}`
        let response = await fetch(pokemonURL)
        let data = await response.json()

        return data
}