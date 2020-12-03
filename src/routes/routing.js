import React, { useEffect, useContext } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { MainPage } from "../views/mainpage/mainpage.js"
import { LoginView } from "../views/loginview/loginview.js"
import { ReportView } from "../views/reportview/reportview.js"
import { DataView } from "../views/dataview/dataview.js"
import { ProfileView } from "../views/profileview/profileview.js"
import { SettingsView } from "../views/settingsview/settingsview.js"
import { UserContext } from "../shared/global/provider/userprovider.js"
import RoutingPaths from "./routingpaths.js"

import { PokemonView } from "../views/pokemonview/pokemonview.js"


export const Routing = (props) => {

    const [ AuthenticatedUser, setAuthenticatedUser ] = useContext( UserContext )

    const BlockRouteIfAuthenticated = ( navigateToView ) => {

        return AuthenticatedUser ? MainPage : navigateToView
    }

    const BlockRouteIfNotAuthenticated = ( navigateToView ) => {

        return !AuthenticatedUser ? LoginView : navigateToView
    }

    const IsUserAuthenticated = () => {
        setAuthenticatedUser( localStorage.getItem( "userName" ) )
    }

    useEffect(() => {
        IsUserAuthenticated()
    }, [])
    
    return (
        <Router>
            { props.children }
            <Switch>
                <Route exact path = { RoutingPaths.ReportView } component = { BlockRouteIfNotAuthenticated( ReportView )} />
                <Route exact path = { RoutingPaths.DataView } component = { BlockRouteIfNotAuthenticated( DataView )} />
                <Route exact path = { RoutingPaths.ProfileView } component = { BlockRouteIfNotAuthenticated( ProfileView )} />
                <Route exact path = { RoutingPaths.SettingsView } component = { BlockRouteIfNotAuthenticated( SettingsView )} />
                <Route exact path = { RoutingPaths.LoginView } component = { BlockRouteIfAuthenticated( LoginView )} />

                <Route exact path = { RoutingPaths.PokemonView } component = { PokemonView } />

                <Route component = { MainPage } />
            </Switch>
        </Router>
    )
}
