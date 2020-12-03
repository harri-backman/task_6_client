import "./profile.css"
import RoutingPaths from "../../routes/routingpaths.js"
import React, { useContext } from "react"
import { UserContext } from "../../shared/global/provider/userprovider.js"
import { useHistory } from "react-router-dom"


export const Profile = () => {

    const History = useHistory()

    const [ AuthenticatedUser, setAuthenticatedUser ] = useContext( UserContext )

    const Logout = () => {
        localStorage.removeItem( "userName" )
        setAuthenticatedUser( false )
        History.push( RoutingPaths.MainPage )
    }

    return (
        <div className = "grid_col_11_12 profile">
            <p
                className = "text_align_left">{ AuthenticatedUser }
            </p>
            <div className = "profileDropdown">
                <a onClick = {() => History.push( RoutingPaths.SettingsView )}>Settings</a>
                <a onClick = {() => History.push( RoutingPaths.ProfileView )}>Profile</a>
                <hr />
                <a onClick = {() => Logout()}>Logout</a>
            </div>            
        </div>
    )
}
