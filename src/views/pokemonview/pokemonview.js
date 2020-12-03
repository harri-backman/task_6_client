import React, { useEffect, useState } from "react"
import PokemonService from "../../shared/api/service/pokemonservice.js"
import { TimePeriod } from "./../../components/monthlyreport/timeperiod.js"

//import Axios from "axios"


export const PokemonView = () => {

    const [ Data, setData ] = useState()

    const [ Search, setSearch ] = useState("")

    const GetDataByAPI = () => {

        
        PokemonService.SearchForPokemon( Search.toLowerCase() )
        .then(( response ) => setData( response.data ))
        .catch(( error ) => console.log( error ))
        
        /*not working
        Axios.get( "https://localhost:5000/user/" + ( Search.toLowerCase() ) )
        .then(( response ) => setData( response.data ))
        .catch(( error ) => console.log( error ))
        */

        /*
        Axios.get( "https://pokeapi.co/api/v2/pokemon/" + ( Search.toLowerCase() ) )
        .then(( response ) => setData( response.data ))
        .catch(( error ) => console.log( error ))
        */
    }

    const DisplayData = () => {
        if( Data ) {
            /*
            id: 132
            name: "ditto"
            types: [0: { slot:1, type: {name:"normal", url:"..."}}]
            */
            return <div>
                    <h3>name: { Data.name }</h3>
                    <h3>id: { Data.id }</h3>
                    <h3>type: { Data.types[0].type.name }</h3>
                </div>
        }
    }

    return (
        <div className = "grid_cols_12_repeat">
            <h1 className = "grid_col_2_7">
                Pokemon View
                { TimePeriod }
            </h1>

            <span>Search:</span>
            <input onChange = {( event ) => setSearch( event.target.value )} />
            <br />
            <button onClick = {() => GetDataByAPI()}>API call</button>
            { DisplayData() }
        </div>
    )
}
