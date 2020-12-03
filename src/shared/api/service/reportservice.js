import http from "../reportapi.js"


const SearchForReportData = ( UserSearch ) => {

    return http.get( "/" + UserSearch )
}

const AppendReportData = ( User ) => {

    return http.post( "/user", User )
}

export default {
    SearchForReportData,
    AppendReportData
}
