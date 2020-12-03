import "./loginview.css"
import RoutingPaths from "../../routes/routingpaths.js"
import React, { useState, useContext } from "react"
import { UserContext } from "../../shared/global/provider/userprovider.js"
import { useHistory } from "react-router-dom"
import ReportService from "../../shared/api/service/reportservice.js"


export const LoginView = () => {

    const [ CurrentUser, setCurrentUser ] = useState()
    const [ UserPassword, setUserPassword ] = useState()
    const [ AuthenticatedUser, setAuthenticatedUser ] = useContext( UserContext )
    const History = useHistory()

    
    const Login = () => {

        setAuthenticatedUser( CurrentUser )
        localStorage.setItem( "userName", CurrentUser )
        History.push( RoutingPaths.MainPage )
    }

    const AppendUser = async () => {

        await ReportService.AppendReportData({ 
            username: CurrentUser, 
            password: UserPassword 
        })

    }

    const UserLogin = async () => {

        await ReportService.SearchForReportData( "searchuser?username=" + CurrentUser )
            .then(( response ) => {

                if ( response.data[0].username === CurrentUser ) { 
                    Login() 
                }
            })
            .catch(() => { 
                AppendUser()
                Login()
            })
    }


    return (
        <div className = "grid_cols_12_repeat">
            
            <h1 className = "grid_col_2_7">
                Login View
            </h1>

            <span className = "grid_col_2_3 text_align_right">Username:</span>
            <input 
                className = "grid_col_3_5 text_align_left" 
                onChange = { event => setCurrentUser( event.target.value )} 
            />

            <span className = "grid_col_2_3 text_align_right">Password:</span>
            <input 
                className = "grid_col_3_5 text_align_left" 
                type = "password" 
                onChange = { event => setUserPassword( event.target.value )} 
            /> 

            <button 
                className = "grid_col_3_5 text_align_center"
                onClick = {() => UserLogin()}
            >Login
            </button>
            
        </div>
    )
}
