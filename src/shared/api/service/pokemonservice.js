import http from "../pokemonapi.js"


const SearchForPokemon = ( UserSearch ) => {

    return http.get( "/" + UserSearch )
}


export default {
    SearchForPokemon
}
