import Axios from "axios"


const PokemonAPI = Axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon"
    //baseURL: "https://localhost:5000"
})


export default PokemonAPI
