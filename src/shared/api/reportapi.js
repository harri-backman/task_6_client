import Axios from "axios"


const ReportAPI = Axios.create({
    baseURL: "http://localhost:5000"
})


export default ReportAPI
