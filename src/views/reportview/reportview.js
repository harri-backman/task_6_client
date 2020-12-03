import "./reportview.css"
import React, { useState } from "react"
import ReportService from "../../shared/api/service/reportservice.js"


export const ReportView = () => {

    const [ Data, setData ] = useState()

    const [ Search, setSearch ] = useState("")

    const GetDataByAPI = () => {   

        setData()

        ReportService.SearchForReportData( Search )
        .then(( response ) => setData( response.data ))
        .catch(( error ) => console.log( error ))
    }

    const DisplayArrayData = () => {

        if( Data ) {

            return (<>
                {
                    Data.map(( Record ) => (
                        
                        <tr key={ Record._id }>
                        <td>{ Record.username }</td>
                        <td>{ Record.password }</td>
                        </tr>
                    ))
                }</>
            )
        }
    }

    return (
        <div className = "grid_cols_12_repeat">

            <h1 className = "grid_col_2_7">
                Report View
            </h1>
            
            <span className = "grid_col_2_3 text_align_left">Search user:</span>
            <input 
                className = "grid_col_3_5 text_align_left"
                onChange = {( event ) => setSearch( event.target.value )}
            />

            <button onClick = {() => GetDataByAPI()}>API call</button>
            
            
            <table id="table" className = "grid_col_2_6">
                <tbody>
                <tr>
                    <th className = "grid_col_2_3 text_align_left">Username</th>
                    <th className = "grid_col_4_5 text_align_left">Password</th> 
                </tr>                    

                { DisplayArrayData() }
                </tbody>
            </table>

        </div>
    )
}
