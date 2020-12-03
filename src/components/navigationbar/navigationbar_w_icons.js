import "./navigationbar.css"
import RoutingPaths from "../../routes/routingpaths.js"
import mainpageLogo from "../../shared/images/mainpageLogo.svg"
import loginLogo from "../../shared/images/loginLogo.svg"
import reportLogo from "../../shared/images/reportLogo.svg"
import dataLogo from "../../shared/images/dataLogo.svg"
import profileLogo from "../../shared/images/profileLogo.svg"
import settingsLogo from "../../shared/images/settingsLogo.svg"
import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import { UserContext } from "../../shared/global/provider/userprovider.js"
import { Profile } from "../profile/profile.js"


export const NavigationBar = () => {

    const History = useHistory()
    const [ AuthenticatedUser, setAuthenticatedUser ] = useContext( UserContext )

    const IsUserAuthenticated = () => {

        return ( AuthenticatedUser )         
            ? <Profile />
            : <>
                <p 
                    onClick = {() => History.push( RoutingPaths.LoginView )}
                    className = "grid_col_10_10 text_align_center pointer">Sign in
                </p>
                <img 
                    onClick = {() => History.push( RoutingPaths.LoginView )}
                    className = "grid_col_11_11 logoType" 
                    src = { loginLogo } alt = "Login" 
                />
            </>
    }
    
    return (
        <div className = "navigationBar">

            <p 
                onClick = {() => History.push( RoutingPaths.MainPage )}
                className = "grid_col_1_1 text_align_center pointer">Home Page
            </p>            
            <img 
                onClick = {() => History.push( RoutingPaths.MainPage )}
                className = "grid_col_2_2 logoType" 
                src = { mainpageLogo } alt = "MainPage" 
            />

            <p 
                onClick = {() => History.push( RoutingPaths.ReportView )}
                className = "grid_col_3_3 text_align_center pointer">Report View
            </p>            
            <img 
                onClick = {() => History.push( RoutingPaths.ReportView )}
                className = "grid_col_4_4 logoType" 
                src = { reportLogo } alt = "Report" 
            />

            <p 
                onClick = {() => History.push( RoutingPaths.DataView )}
                className = "grid_col_5_5 text_align_center pointer">Data View
            </p>            
            <img 
                onClick = {() => History.push( RoutingPaths.DataView )}
                className = "grid_col_6_6 logoType" 
                src = { dataLogo } alt = "Data" 
            />

            { IsUserAuthenticated() }
        </div>
    )
}
